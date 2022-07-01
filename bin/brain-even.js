#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askUsername from '../src/cli.js';

// Блок приветствия
console.log('Welcome to the Brain Games!');
const username = askUsername();
console.log(`Hello, ${username}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const MIN_NUMBER = 1;
const MAX_NUMBER = 49;

for (let i = 0; i < 3; i += 1) {
  let questionNumber = Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER;
  questionNumber = Math.floor(questionNumber);
  const correctAnswer = (questionNumber % 2 === 0) ? 'yes' : 'no';

  console.log(`Question: ${questionNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    if (i === 2) console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${username}`);
    break;
  }
}
