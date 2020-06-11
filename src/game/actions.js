export const GENERATE_WORD = 'GENERATE_WORD';
export const GUESS_LETTER = 'GUESS_LETTER';
export const SHOW_LOSS = 'SHOW_LOSS';
export const SHOW_WIN = 'SHOW_WIN';

export const generate = () => ({ type: GENERATE_WORD });
export const guess = (letter) => ({ type: GUESS_LETTER, letter });
export const lose = () => ({ type: SHOW_LOSS });
export const win = () => ({ type: SHOW_WIN });
