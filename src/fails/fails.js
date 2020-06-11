import s from './fails.module.scss';

const Fails = ({ word, guessedLetters }) => {
  const failedGuesses = guessedLetters.filter((l) => !word.includes(l));

  return (
    <div className={s.fails}>
      <span>Misses:</span>
      <ul className={s.fails__letters}>
        {failedGuesses.map((letter) => (
          <li className={s.fails__letter}>{letter}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fails;
