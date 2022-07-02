#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {askUsername, generateGame} from '../../src/index.js';

// Блок приветствия
console.log('Welcome to the Brain Games!');
const username = askUsername();
console.log(`Hello, ${username}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const questions = [];
const correctAnswers = [];

for (let i = 0; i < 3; i += 1) { // questions and correctAnswers generator
  let generatedQuestion = Math.random() * (MAX_NUMBER - MIN_NUMBER - 1) + MIN_NUMBER;
  generatedQuestion = Math.floor(generatedQuestion);
  const generatedAnswer = (generatedQuestion % 2 === 0) ? 'yes' : 'no';

  questions.push(generatedQuestion);
  correctAnswers.push(generatedAnswer);
}

generateGame(questions, correctAnswers, username);