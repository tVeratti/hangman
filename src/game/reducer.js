import words from 'random-words';
import * as actions from './actions';

const getWord = () => words({ exactly: 1 })[0].toLowerCase();

export const STATUSES = {
  GUESSING: 'GUESSING',
  WIN: 'WIN',
  LOSS: 'LOSS',
};

export const defaultState = {
  word: getWord(),
  guessedLetters: [],
  status: STATUSES.GUESSING,
};

const reducer = (state = defaultState, action) => {
  let nextState = { ...state };
  switch (action.type) {
    case actions.GENERATE_WORD:
      nextState.status = STATUSES.GUESSING;
      nextState = {
        ...defaultState,
        word: getWord(),
      };
      break;
    case actions.GUESS_LETTER:
      nextState.guessedLetters = [...state.guessedLetters, action.letter];
      break;
    case actions.SHOW_WIN:
      nextState.status = STATUSES.WIN;
      break;
    case actions.SHOW_LOSS:
      nextState.status = STATUSES.LOSS;
      break;
    default:
      return state;
  }

  console.log(nextState);
  return nextState;
};

export default reducer;
