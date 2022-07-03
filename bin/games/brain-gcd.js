#!/usr/bin/env node

import { askUsername, generateGame } from '../../src/index.js';

// Блок приветствия
console.log('Welcome to the Brain Games!');
const username = askUsername();
console.log(`Hello, ${username}!`);

console.log('Find the greatest common divisor of given numbers.');

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const questions = [];
const correctAnswers = [];

const divisors = (a) => { // поиск делителей числа
  const result = [];
  for (let i = a; i >= 1; i -= 1) {
    if (a % i === 0) result.push(i);
  }
  return result;
};
/* поиск большего общего делителя, линтер ругается на for .. of */
const greatestCommonDivisor = (aDivisors, bDivisors) => {
  for (let i = 0; i < aDivisors.length; i += 1) {
    if (bDivisors.includes(aDivisors[i])) return aDivisors[i];
  }
  return null;
};

for (let i = 0; i < 3; i += 1) {
  const firstOperand = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER - 1) + MIN_NUMBER);
  const secondOperand = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER - 1) + MIN_NUMBER);
  const question = `${firstOperand} ${secondOperand}`;
  questions.push(question);

  const firstOperandDiv = divisors(firstOperand);
  const secondOperandDiv = divisors(secondOperand);
  let generatedAnswer = greatestCommonDivisor(firstOperandDiv, secondOperandDiv);
  generatedAnswer = String(generatedAnswer);
  correctAnswers.push(generatedAnswer);
}

generateGame(questions, correctAnswers, username);
