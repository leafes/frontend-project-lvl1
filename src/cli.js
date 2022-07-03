import readlineSync from 'readline-sync';

const askUsername = () => {
  const name = readlineSync.question("May I have your name? ");
  return name;
};

export default askUsername;
