import { bookQuestions, coreQuestions, finishedWorkIds, isCorrect, refresherQuestions, resultTier, shuffleChoices } from './quiz-engine.mjs';

const $ = (id) => document.getElementById(id);
const sections = ['quizHome', 'quizIntro', 'quizStage', 'quizResult'];
const RESULT_KEY = 'horusHeresyQuizResultsV1';
let data;
let mode = 'home';
let workId = null;
let questions = [];
let index = 0;
let answers = [];
let attempt = 0;

function show(section) {
    for (const id of sections) $(id).hidden = id !== section;
    document.querySelector('.quiz-shell').classList.toggle('is-focused', section !== 'quizHome');
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function readJson(key, fallback) {
    try {
        const value = JSON.parse(localStorage.getItem(key) || 'null');
        return value && typeof value === 'object' && !Array.isArray(value) ? value : fallback;
    } catch { return fallback; }
}

function saveResult() {
    const stored = readJson(RESULT_KEY, {});
    const key = mode === 'book' ? workId : mode;
    const correct = answers.filter((answer) => answer.correct).length;
    const previous = Number(stored[key]?.attempts);
    stored[key] = { correct, total: questions.length, at: new Date().toISOString(), attempts: (Number.isSafeInteger(previous) && previous >= 0 ? previous : 0) + 1 };
    try { localStorage.setItem(RESULT_KEY, JSON.stringify(stored)); } catch { /* The quiz still works without storage. */ }
}

function selectedFinishedIds() {
    return finishedWorkIds(data, readJson('horusHeresyProgress', {}));
}

function updateUrl(params) {
    const url = new URL('quiz.html', location.href);
    for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
    history.pushState({}, '', url);
}

function renderBookResults(query = '') {
    const all = Object.entries(data.works)
        .filter(([, work]) => `${work.title} ${work.author}`.toLowerCase().includes(query.trim().toLowerCase()))
        .sort((a, b) => a[1].title.localeCompare(b[1].title));
    const shown = all.slice(0, 12);
    $('quizSearchCount').textContent = query
        ? `${all.length} matching ${all.length === 1 ? 'work' : 'works'}${all.length > 12 ? '. Showing the first twelve.' : '.'}`
        : `Search all ${Object.keys(data.works).length} distinct works. Showing twelve to start.`;
    $('quizBookResults').replaceChildren(...shown.map(([id, work]) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `quiz.html?work=${encodeURIComponent(id)}`;
        link.textContent = work.title;
        const note = document.createElement('span');
        note.textContent = work.kind === 'curated' ? 'HAND-WRITTEN CHALLENGE' : 'MEMORY CHECK';
        item.append(link, note);
        return item;
    }));
}

function showHome() {
    mode = 'home';
    workId = null;
    $('quizError').hidden = true;
    const finished = selectedFinishedIds();
    $('completedDescription').textContent = finished.length
        ? `Your reading record has ${finished.length} finished ${finished.length === 1 ? 'work' : 'works'}. The refresher draws only from those stories, up to ten questions.`
        : 'No finished works are recorded in this browser yet. Mark a work finished in the Archive, or try the Core challenge below.';
    $('startCompleted').disabled = finished.length === 0;
    renderBookResults();
    show('quizHome');
}

function showIntro(nextMode, nextWorkId = null) {
    mode = nextMode;
    workId = nextWorkId;
    $('quizError').hidden = true;
    const work = workId && data.works[workId];
    const finished = selectedFinishedIds();
    $('quizIntroArt').hidden = !work;
    if (work) {
        $('quizCover').src = work.cover;
        $('quizCover').alt = `Cover associated with ${work.title}`;
        $('quizIntroKicker').textContent = work.kind === 'curated' ? 'HAND-WRITTEN BOOK CHALLENGE' : 'ARCHIVE MEMORY CHECK';
        $('quizIntroTitle').textContent = work.title;
        $('quizIntroDescription').textContent = work.kind === 'curated'
            ? 'Three publisher-linked questions about this novel. See what you remember before opening the recap.'
            : 'Three prompts about this work. Recall its story before revealing the Archive synopsis, then check two catalogue facts. This is a light memory aid, not an expert exam.';
    } else {
        $('quizIntroKicker').textContent = nextMode === 'core' ? 'TWELVE NOVELS · TWELVE QUESTIONS' : 'YOUR FINISHED WORKS';
        $('quizIntroTitle').textContent = nextMode === 'core' ? 'The Core saga challenge' : 'Your series refresher';
        $('quizIntroDescription').textContent = nextMode === 'core'
            ? 'One question from each Core novel, in reading order. You may encounter plot details from books you have not yet read.'
            : `${Math.min(finished.length, 10)} questions drawn only from the works marked finished in this browser. Recaps and answers may still contain story spoilers.`;
    }
    const key = nextMode === 'book' ? nextWorkId : nextMode;
    const previous = Number(readJson(RESULT_KEY, {})[key]?.attempts);
    attempt = Number.isSafeInteger(previous) && previous >= 0 ? previous : 0;
    $('startQuiz').disabled = nextMode === 'finished' && finished.length === 0;
    show('quizIntro');
}

function begin() {
    questions = mode === 'book' ? bookQuestions(data, workId)
        : mode === 'core' ? coreQuestions(data, attempt)
            : refresherQuestions(data, selectedFinishedIds(), 10, attempt);
    if (!questions.length) {
        $('quizError').textContent = 'No questions are available for this selection.';
        $('quizError').hidden = false;
        return;
    }
    index = 0;
    answers = [];
    show('quizStage');
    renderQuestion();
}

function renderQuestion() {
    const question = questions[index];
    $('quizProgressText').textContent = `QUESTION ${index + 1} / ${questions.length}`;
    $('quizWorkTitle').textContent = question.workTitle;
    const progress = Math.round((index / questions.length) * 100);
    $('quizProgressFill').style.width = `${progress}%`;
    document.querySelector('.quiz-progress-track').setAttribute('aria-valuenow', String(progress));
    $('quizQuestionKind').textContent = question.type === 'recall' ? 'RECALL FROM MEMORY' : 'CHOOSE ONE ANSWER';
    $('quizQuestion').textContent = question.prompt;
    $('quizFeedback').hidden = true;
    $('quizNext').hidden = true;
    $('quizRecallAnswer').hidden = true;
    $('quizReveal').hidden = question.type !== 'recall';
    $('quizAnswers').replaceChildren();
    if (question.type === 'choice') {
        for (const choice of shuffleChoices(question.choices)) {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = choice;
            button.addEventListener('click', () => answerQuestion(choice));
            $('quizAnswers').append(button);
        }
    }
    $('quizQuestion').focus({ preventScroll: true });
}

function answerQuestion(value) {
    const question = questions[index];
    const correct = isCorrect(question, value);
    answers.push({ question, value, correct });
    for (const button of $('quizAnswers').querySelectorAll('button')) {
        button.disabled = true;
        if (button.textContent === question.answer) button.classList.add('is-correct');
        else if (button.textContent === value) button.classList.add('is-wrong');
    }
    for (const button of $('quizRecallAnswer').querySelectorAll('button')) button.disabled = true;
    $('quizFeedbackTitle').textContent = question.type === 'recall'
        ? correct ? 'Thread remembered' : 'A useful reminder'
        : correct ? 'Correct' : `The answer: ${question.answer}`;
    $('quizFeedbackText').textContent = question.explanation;
    $('quizSource').href = question.source;
    const sourceHost = question.source.startsWith('https://') ? new URL(question.source).hostname : '';
    $('quizSource').textContent = sourceHost === 'www.blacklibrary.com'
        ? 'Black Library source ↗'
        : sourceHost === 'www.warhammer-community.com'
            ? 'Warhammer Community source ↗'
            : 'Archive work record ↗';
    $('quizFeedback').hidden = false;
    $('quizNext').textContent = index === questions.length - 1 ? 'SEE RESULTS →' : 'NEXT QUESTION →';
    $('quizNext').hidden = false;
    $('quizNext').focus({ preventScroll: true });
}

function renderResult() {
    const correct = answers.filter((answer) => answer.correct).length;
    const tier = resultTier(correct, questions.length);
    const book = workId && data.works[workId];
    $('quizResultTitle').textContent = tier === 'strong' ? 'The record holds' : tier === 'refresh' ? 'A few threads to revisit' : 'A reread may be calling';
    $('quizScore').textContent = `${correct} / ${questions.length}`;
    $('quizResultMessage').textContent = tier === 'strong'
        ? 'A strong recall. Try again later to see how much stays with you.'
        : tier === 'refresh'
            ? 'Some details have faded. Check the missed answers and revisit the work that interests you.'
            : book?.kind === 'catalogue'
                ? 'This is a light catalogue-based check. Revisit the synopsis or the work itself if you want a fuller refresher.'
                : 'Several threads have faded. You might enjoy rereading the missed works before carrying on.';
    const missed = answers.filter((answer) => !answer.correct);
    $('quizMissedSection').hidden = missed.length === 0;
    $('quizMissedList').replaceChildren(...missed.map(({ question }) => {
        const item = document.createElement('li');
        const heading = document.createElement('strong');
        heading.textContent = question.workTitle;
        const prompt = document.createElement('span');
        prompt.textContent = question.prompt;
        const answer = document.createElement('span');
        answer.textContent = question.type === 'recall' ? 'Review the Archive synopsis' : `Answer: ${question.answer}`;
        const link = document.createElement('a');
        link.href = `index.html#work=${encodeURIComponent(question.workId)}`;
        link.textContent = 'Revisit this work →';
        item.append(heading, prompt, answer, link);
        return item;
    }));
    $('quizProgressFill').style.width = '100%';
    saveResult();
    show('quizResult');
    $('quizResultTitle').focus({ preventScroll: true });
}

function route() {
    const params = new URLSearchParams(location.search);
    const selectedWork = params.get('work');
    if (selectedWork) {
        if (data.works[selectedWork]) showIntro('book', selectedWork);
        else {
            showHome();
            $('quizError').textContent = 'That work does not have a quiz in this Archive.';
            $('quizError').hidden = false;
        }
    } else if (params.get('mode') === 'core') showIntro('core');
    else if (params.get('mode') === 'finished') showIntro('finished');
    else showHome();
}

async function init() {
    try {
        const response = await fetch(new URL('quiz-data.json', import.meta.url));
        if (!response.ok) throw new Error(`Quiz data returned ${response.status}`);
        data = await response.json();
        if (data.schemaVersion !== 1 || !data.works) throw new Error('Unsupported quiz data');
        route();
    } catch (error) {
        $('quizError').textContent = 'The quiz could not be loaded. Please try again later.';
        $('quizError').hidden = false;
        console.error(error);
    }
}

$('startCompleted').addEventListener('click', () => { updateUrl({ mode: 'finished' }); showIntro('finished'); });
$('startCore').addEventListener('click', () => { updateUrl({ mode: 'core' }); showIntro('core'); });
$('quizBookSearch').addEventListener('input', (event) => renderBookResults(event.target.value));
$('startQuiz').addEventListener('click', begin);
$('quizReveal').addEventListener('click', () => {
    $('quizRevealText').textContent = questions[index].reveal;
    $('quizRecallAnswer').hidden = false;
    $('quizReveal').hidden = true;
    $('quizRecallAnswer').querySelector('button').focus({ preventScroll: true });
});
$('quizRecallAnswer').addEventListener('click', (event) => {
    const rating = event.target.closest('[data-rating]');
    if (rating) answerQuestion(rating.dataset.rating === 'yes');
});
$('quizNext').addEventListener('click', () => {
    if (index === questions.length - 1) renderResult();
    else { index++; renderQuestion(); }
});
$('quizRetry').addEventListener('click', () => { attempt++; begin(); });
window.addEventListener('popstate', () => { if (data) route(); });
init();
