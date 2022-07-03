#!/usr/bin/env node

import {
  askUsername, generateGame, generateRandomNumber, divisors,
} from '../../src/index.js';

// Блок приветствия
console.log('Welcome to the Brain Games!');
const username = askUsername();
console.log(`Hello, ${username}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const questions = [];
const correctAnswers = [];

const isPrime = (a) => (divisors(a).length <= 2);

for (let i = 0; i < 3; i += 1) {
  const questionNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const answer = (isPrime(questionNumber)) ? 'yes' : 'no';
  questions.push(questionNumber);
  correctAnswers.push(answer);
}
console.log(correctAnswers);
generateGame(questions, correctAnswers, username);
