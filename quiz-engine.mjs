export function finishedWorkIds(data, rawProgress) {
    if (!rawProgress || typeof rawProgress !== 'object' || Array.isArray(rawProgress)) return [];
    return Object.entries(data.works).filter(([id, work]) =>
        [id, ...work.legacyKeys].some((key) => rawProgress[key] === 'finished'))
        .map(([id]) => id);
}

export function refresherQuestions(data, finishedIds, limit = 10, offset = 0) {
    const finished = new Set(finishedIds);
    const ordered = [...data.core, ...Object.keys(data.works).filter((id) => !data.core.includes(id))]
        .filter((id) => finished.has(id) && data.works[id]);
    if (!ordered.length) return [];
    const rotated = ordered.map((_, index) => ordered[(index + offset) % ordered.length]);
    return rotated.slice(0, limit).map((workId, index) => {
        const work = data.works[workId];
        return { ...work.questions[(offset + index) % work.questions.length], workId, workTitle: work.title };
    });
}

export function coreQuestions(data, offset = 0) {
    return data.core.map((workId, index) => {
        const work = data.works[workId];
        return { ...work.questions[(offset + index) % work.questions.length], workId, workTitle: work.title };
    });
}

export function bookQuestions(data, workId) {
    const work = data.works[workId];
    return work ? work.questions.map((question) => ({ ...question, workId, workTitle: work.title })) : [];
}

export function shuffleChoices(choices, random = Math.random) {
    const result = [...choices];
    for (let index = result.length - 1; index > 0; index--) {
        const swap = Math.floor(random() * (index + 1));
        [result[index], result[swap]] = [result[swap], result[index]];
    }
    return result;
}

export function isCorrect(question, answer) {
    return question.type === 'recall' ? answer === true : answer === question.answer;
}

export function resultTier(correct, total) {
    if (!total) return 'empty';
    const ratio = correct / total;
    if (ratio >= 0.8) return 'strong';
    if (ratio >= 0.6) return 'refresh';
    return 'reread';
}
