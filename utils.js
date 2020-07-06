export function countsAsYes(word) {
    const firstLetter = word.charAt(0).toLowerCase();
    const firstY = firstLetter === 'y';

    return firstY;
}