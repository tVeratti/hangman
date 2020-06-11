import { useState } from 'react';
import s from './form.module.scss';

const Form = ({ onGuess, disabled }) => {
  const [letter, setLetter] = useState('');

  const onInput = (e) => {
    const { value } = e.target;
    // Keep only the last entered letter value of the input value.
    const stringValue = `${value.slice(-1) || ''}`.toLowerCase();
    setLetter(stringValue);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Do not post form
    onGuess(letter);
    setLetter('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <input
        className={s.form__input}
        type="text"
        onInput={onInput}
        value={letter}
        disabled={disabled}
      />
      <button className={s.form__button} disabled={!letter || disabled}>
        Guess
      </button>
    </form>
  );
};

export default Form;
