#!/usr/bin/env node

import { askUsername, generateGame, generateRandomNumber } from '../../src/index.js';

// Блок приветствия
console.log('Welcome to the Brain Games!');
const username = askUsername();
console.log(`Hello, ${username}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const questions = [];
const correctAnswers = [];

const isPrime = (a) => { // определяем простое ли число
  if (a < 2) return true;
  const result = [];

  for (let i = a; i >= 1; i -= 1) {
    if (a % i === 0) result.push(i);
  }
  return (result.length <= 2);
};

for (let i = 0; i < 3; i += 1) {
  const questionNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const answer = (isPrime(questionNumber)) ? 'yes' : 'no';
  questions.push(questionNumber);
  correctAnswers.push(answer);
}

generateGame(questions, correctAnswers, username);
