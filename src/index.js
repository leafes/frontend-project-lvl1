import readlineSync from 'readline-sync';

export const askUsername = () => {
  const username = readlineSync.question('May I have your name? ');
  return username;
};

export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min - 1) + min);

export const divisors = (a) => { // поиск делителей числа
  const result = [];
  for (let i = a; i >= 1; i -= 1) {
    if (a % i === 0) result.push(i);
  }
  return result;
};

export const generateGame = (questions, correctAnswers, username) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswers[i]) {
      console.log('Correct!');

      if (i === 2) return console.log(`Congratulations, ${username}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.`);

      return console.log(`Let's try again, ${username}!`);
    }
  }
  return 0;
};
