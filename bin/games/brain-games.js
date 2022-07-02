#!/usr/bin/env node
import askUsername from '../../src/cli.js';

console.log('Welcome to the Brain Games!');

const username = askUsername();

console.log(`Hello, ${username}!`);
