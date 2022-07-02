import readlineSync from 'readline-sync';

export const askUsername = () => {
  const usernaname = readlineSync.question("What's your name? ");
  return username;
};

const generateGame = (questions, correctAnswers, username) => {

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswers[i]) {
      console.log('Correct!');

      if (i === 2) return `Congratulations, {username}!`;

    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.`);

      return `Let's try again, {username}`;
    }
  }
  
};

export default generateGame;