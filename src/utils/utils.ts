export function getCountCharacters(string: string): number {
	return string.length;
}

// Funkcja sprawdzająca czy liczba jest parzysta
export function getIsEven(number: number): boolean {
	return number % 2 === 0;
}

export const getParityMessage = (isEvenParam: boolean): string =>
	isEvenParam ? 'Ta liczba jest parzysta' : 'Ta liczba jest nieparzysta';

export function processStrin(strParam?: string): string {
	if (!strParam) return 'nie poprawny typ';

	const lenghtOfString = getCountCharacters(strParam);
	const isEvenNumber = getIsEven(lenghtOfString);
	const message = getParityMessage(isEvenNumber);

	return `${strParam} - Liczba znaków: ${lenghtOfString}. ${message}`;
}
