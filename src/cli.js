import readlineSync from 'readline-sync';

export const askUsername = ()  => {
	const name = readlineSync.question("What's your name? ");
	return name;
}