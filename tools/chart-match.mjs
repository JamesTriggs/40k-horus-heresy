// One title reconciliation rule for the chart, reading order and catalogue
// audit. An alias only corrects spelling or punctuation for the same work.
// Distinct Tallarn novellas must not be silently mapped to the Tallarn book.

export const normaliseTitle = (value) => String(value)
    .toLowerCase()
    .replace(/^(garro|bjorn):\s*/, '')
    .replace(/[^a-z0-9]+/g, '');

const aliases = new Map([
    ['damnationofpythos', 'thedamnationofpythos'],
    ['flightoftheeisenstein', 'theflightoftheeisenstein'],
    ['knightofgray', 'knightofgrey'],
    ['kabanproject', 'thekabanproject'],
    ['masterofmankind', 'themasterofmankind'],
    ['outcastdead', 'theoutcastdead'],
    ['thefuryofmagnus', 'furyofmagnus'],
    ['theironfire', 'ironfire'],
    ['thepraetorianofdorn', 'praetorianofdorn'],
    ['thesonsofselenar', 'sonsoftheselenar'],
    ['wolfking', 'thewolfking'],
    ['thiefofrevelation', 'thiefofrevelations'],
    ['vulcanlives', 'vulkanlives'],
    ['theheartofpharos', 'theheartofthepharos'],
    ['guardianoftheorder', 'cypherguardianoforder'],
    ['heraldofsangiunius', 'heraldofsanguinius'],
]);

export const chartTitleKey = (label) => {
    const key = normaliseTitle(label);
    return aliases.get(key) ?? key;
};
