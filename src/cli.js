import readlineSync from 'readline-sync';

const askUsername = () => {
  const name = readlineSync.question("What's your name? ");
  return name; 
};

export default askUsername;
