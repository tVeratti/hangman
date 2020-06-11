import s from './word.module.scss';

const Word = ({ word, guessedLetters, gameOver }) => {
  const letters = word.split('');

  return (
    <ul className={s.word}>
      {letters.map((letter) => (
        <li className={s.word__letter}>
          {guessedLetters.includes(letter) || gameOver ? letter : '_'}
        </li>
      ))}
    </ul>
  );
};

export default Word;
