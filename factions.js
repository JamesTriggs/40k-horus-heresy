// A navigation layer over existing catalogue tags and reviewed event records.
const factionNames = [...new Set(Object.values(bookData).flatMap((book) => book.legions))]
    .filter((name) => name && !name.startsWith('__'))
    .sort((a, b) => a.localeCompare(b));
const workIdByKey = new Map(workIdentityData.identities.flatMap((work) =>
    work.legacyKeys.map((key) => [key, work.id])));
const requested = new URLSearchParams(location.search).get('legion');
const selected = factionNames.includes(requested) ? requested : 'Sons of Horus';
const selector = document.getElementById('factionPicker');
const index = document.getElementById('factionIndex');

for (const name of factionNames) {
    const url = `factions.html?legion=${encodeURIComponent(name)}`;
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    selector.append(option);
    const link = document.createElement('a');
    link.href = url;
    link.textContent = name;
    if (name === selected) link.setAttribute('aria-current', 'page');
    index.append(link);
}
selector.value = selected;
selector.addEventListener('change', () => {
    location.href = `factions.html?legion=${encodeURIComponent(selector.value)}`;
});

const works = Object.entries(bookData).filter(([, book]) => book.legions.includes(selected));
const uniqueWorks = [...new Map(works.map(([key, book]) => [workIdByKey.get(key) || key, { key, book }])).values()]
    .sort((a, b) => a.book.title.localeCompare(b.book.title));
const events = eventData.events.filter((event) => event.factions.includes(selected) ||
    event.works.some((work) => work.viewpoint === selected));

document.title = `${selected} | Faction atlas | Horus Heresy Archive`;
document.getElementById('factionTitle').textContent = selected;
document.getElementById('factionSummary').textContent = `${uniqueWorks.length} distinct tagged ${uniqueWorks.length === 1 ? 'work' : 'works'} and ${events.length} source-backed ${events.length === 1 ? 'event' : 'events'} in this atlas. Works are listed alphabetically, not as a reading order.`;
document.getElementById('browseFaction').href = `index.html?route=full&legion=${encodeURIComponent(selected)}`;

const eventList = document.getElementById('factionEvents');
for (const event of events) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `events.html#${event.id}`;
    link.textContent = event.title;
    item.append(link);
    const relation = event.works.find((work) => work.viewpoint === selected);
    if (relation) item.append(document.createTextNode(` · ${selected} viewpoint`));
    eventList.append(item);
}
if (!events.length) {
    const item = document.createElement('li');
    item.textContent = 'No event in the selected publisher overview is tagged with this faction yet.';
    eventList.append(item);
}

const workList = document.getElementById('factionWorks');
for (const { key, book } of uniqueWorks) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `index.html#work=${encodeURIComponent(workIdByKey.get(key) || key)}`;
    link.textContent = book.title;
    const detail = document.createElement('span');
    detail.textContent = ` ${book.format} · ${book.author}`;
    item.append(link, detail);
    workList.append(item);
}
