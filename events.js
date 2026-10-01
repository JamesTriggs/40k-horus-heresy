// Render the source-backed event atlas from reviewable data/events.json.
const eventList = document.getElementById('eventList');
const eventJump = document.getElementById('eventJump');
const workIdByKey = new Map(workIdentityData.identities.flatMap((work) =>
    work.legacyKeys.map((key) => [key, work.id])));

for (const event of eventData.events) {
    const jump = document.createElement('a');
    jump.href = `#${event.id}`;
    jump.textContent = event.title;
    eventJump.append(jump);

    const article = document.createElement('article');
    article.className = 'event-card';
    article.id = event.id;
    article.tabIndex = -1;

    const heading = document.createElement('h2');
    heading.textContent = event.title;
    article.append(heading);

    const intro = document.createElement('p');
    intro.textContent = event.introSafe;
    article.append(intro);

    if (event.factions.length) {
        const factions = document.createElement('p');
        factions.className = 'event-factions';
        factions.append(document.createTextNode('Related factions: '));
        event.factions.forEach((name, index) => {
            if (index) factions.append(document.createTextNode(', '));
            const link = document.createElement('a');
            link.href = `factions.html?legion=${encodeURIComponent(name)}`;
            link.textContent = name;
            factions.append(link);
        });
        article.append(factions);
    }

    const worksHeading = document.createElement('h3');
    worksHeading.textContent = 'Works in this guide';
    article.append(worksHeading);

    const works = document.createElement('ol');
    works.className = 'event-works';
    for (const relation of event.works) {
        const book = bookData[relation.key];
        if (!book) continue;
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `index.html#work=${encodeURIComponent(workIdByKey.get(relation.key) || relation.key)}`;
        link.textContent = book.title;
        const detail = document.createElement('span');
        detail.textContent = ` ${relation.relation}${relation.viewpoint ? ` · ${relation.viewpoint} viewpoint` : ''}`;
        item.append(link, detail);
        works.append(item);
    }
    article.append(works);

    const source = document.createElement('p');
    source.className = 'event-source';
    const sourceLink = document.createElement('a');
    sourceLink.href = event.source;
    sourceLink.target = '_blank';
    sourceLink.rel = 'noopener noreferrer';
    sourceLink.textContent = 'Publisher overview (contains plot spoilers)';
    source.append(sourceLink, document.createTextNode(` · reviewed ${eventData.reviewedAt}`));
    article.append(source);

    eventList.append(article);
}

let targetId = '';
try { targetId = decodeURIComponent(location.hash.slice(1)); } catch { /* ignore malformed fragment */ }
const target = document.getElementById(targetId);
if (target) {
    target.scrollIntoView({ block: 'start' });
    target.focus({ preventScroll: true });
}
