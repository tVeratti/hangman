import { useReducer, useEffect } from 'react';

import reducer, { defaultState, STATUSES } from '../src/game/reducer';
import * as actions from '../src/game/actions';

import { Form } from '../src/form';
import { Word } from '../src/word';
import { Fails } from '../src/fails';

import s from './index.module.scss';

const MAX_GUESSES = 6;

const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const onGuess = (letter) => {
    if (!state.guessedLetters.includes(letter)) {
      dispatch(actions.guess(letter));
    }
  };

  const onRestart = () => dispatch(actions.generate());

  useEffect(() => {
    // Compare all letters (guess order does not matter)
    const allGuessed = state.word
      .split('')
      .every((l) => state.guessedLetters.includes(l));

    if (allGuessed) {
      dispatch(actions.win());
    } else if (state.guessedLetters.length >= MAX_GUESSES) {
      dispatch(actions.lose());
    }

    // Only check for win/loss after a new letter is guessed.
  }, [state.guessedLetters]);

  const gameOver = [STATUSES.WIN, STATUSES.LOSS].includes(state.status);

  return (
    <div className={s.layout}>
      <h1>Play Hangman!</h1>
      {/* Show Hangman Character */}
      <div className={s.layout__guesses}>
        <Word {...state} gameOver={gameOver} />
        <Fails {...state} />
      </div>
      <Form onGuess={onGuess} disabled={gameOver} />

      {gameOver && (
        <div className={s.layout__status}>
          <div>You {state.status == STATUSES.WIN ? 'Win' : 'Lose'}!</div>
          <button onClick={onRestart}>Start Over</button>
        </div>
      )}
    </div>
  );
};

export default Index;
