#!/usr/bin/env node

import { askUsername, generateGame, generateRandomNumber } from '../../src/index.js';

// Блок приветствия
console.log('Welcome to the Brain Games!');
const username = askUsername();
console.log(`Hello, ${username}!`);

console.log('What number is missing in the progression?');

const MIN_NUMBER = 1;
const MAX_NUMBER = 10;
const questions = [];
const correctAnswers = [];

const generateProgression = () => {
	const progression = [];
	const step = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
	const element = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
	const length = generateRandomNumber(4, 11) * step;

	for (let i = step; i <= length; i += step) {
		progression.push(i + element);
	}

	return progression;
};

for (let i = 0; i < 3; i += 1) {
	let progression = generateProgression();
	const hiddenIndex = Math.floor(Math.random() * progression.length)
	const answer = String(progression[hiddenIndex]);

	progression[hiddenIndex] = '...';
	progression = progression.join(' ');
	questions.push(progression);
	correctAnswers.push(answer);
}
generateGame(questions, correctAnswers, username);