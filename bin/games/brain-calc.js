#!/usr/bin/env node

import { askUsername, generateGame } from '../../src/index.js';

// Блок приветствия
console.log('Welcome to the Brain Games!');
const username = askUsername();
console.log(`Hello, ${username}!`);

console.log('What is the result of the expression?');

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const questions = [];
const correctAnswers = [];

const operators = ['+', '-', '*'];

for (let i = 0; i < 3; i += 1) {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const firstOperand = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER - 1) + MIN_NUMBER);
  const secondOperand = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER - 1) + MIN_NUMBER);
  const generatedQuestion = `${firstOperand} ${operator} ${secondOperand}`;
  let generatedAnswer = 0;
  switch (operator) {
    case '+':
      generatedAnswer = firstOperand + secondOperand;
      break;
    case '-':
      generatedAnswer = firstOperand - secondOperand;
      break;
    default:
      generatedAnswer = firstOperand * secondOperand;
      break;
  }
  generatedAnswer = String(generatedAnswer);
  questions.push(generatedQuestion);
  correctAnswers.push(generatedAnswer);
}

generateGame(questions, correctAnswers, username);
