import {
	getCountCharacters,
	getIsEven,
	getParityMessage,
	processStrin,
} from '../../utils/utils';
import './index.css';

interface AnalizeResultInterface {
	inputValue: string;
	charCount: number;
	isEven: boolean;
}

export const Task2 = () => {
	//   To ćwiczenie ma na celu utrwalenie wiedzy związanej z typowaniem obiektów
	//   1. Zdefiniujmy typ/interfejs AnalyzeResult, który będzie zawierał:
	//   wartość wejściową jako string
	//   informację o ilości znaków w stringu jako number
	//   informację czy ilość znaków jest liczbą parzystą czy nie jako boolean
	//   2 .następnie bazując na funkcji processString z Ćwiczenia 5  powinnismy  rozbić ją na dwie
	//   osobne funkcje:
	//   analyzeString która zwraca obiekt AnalyzeResult | string
	//   printAnalyzeResult która przyjmuje AnalyzeResult | string jako argument i zwraca string
	//   zgodny z wcześniejszym działaniem
	//   3. string dla błędu należy po prostu zwrócić
	const analyzeString = (
		stringParam: string
	): AnalizeResultInterface | string => {
		if (typeof stringParam !== 'string')
			return 'Błąd: podana wartość nie jest stringiem';
		const charCount = getCountCharacters(stringParam);
		const isEvenCharacterCount = getIsEven(charCount);
		return {
			inputValue: stringParam,
			charCount: charCount,
			isEven: isEvenCharacterCount,
		};
	};
	const printAnalyzeResult = (
		result: AnalizeResultInterface | string
	): string => {
		if (typeof result === 'string')
			return 'Błąd: podana wartość nie jest stringiem';
		const { inputValue, charCount, isEven } = result;
		const evenOddMessage = getParityMessage(isEven);
		return `${inputValue} - liczba znaków ${charCount}. ${evenOddMessage}`;
	};
	const getResultForAnalyze = analyzeString('Maciej');
	const getResultForAnalyze2 = analyzeString(324325);
	console.log('getResultForAnalyze', getResultForAnalyze);

	// const test2 = analyzeString(12312321);
	// console.log('test2', test2);

	// const test3 = analyzeString(true);
	// console.log('test3', test3);
	return (
		<div className='conteinertypescript-task1'>
			<p>{processStrin('dominik')}</p>
			<p>cześć</p>
			<div>{printAnalyzeResult(getResultForAnalyze)}</div>
			<div>{printAnalyzeResult(getResultForAnalyze2)}</div>
		</div>
	);
};
