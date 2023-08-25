import './index.css';
type tabOfNumber = number[];

export const Task4 = () => {
	const tab: tabOfNumber = [1, 2, 3, 4, 5];
	const sumAll = (tabNumber: number[]): number => {
		let sumResult: number = 0;
		console.log(tabNumber);
		tabNumber.map((sum) => {
			sumResult += sum;
		});
		return sumResult;
	};
	const sumAll2 = (tabNumber: number[]): number => {
		const sumResult: number = tabNumber.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0
		);
		console.log(tabNumber);
		return sumResult;
	};
	return (
		<div className='conteinertypescript-task1'>
			Taske 4<p>{sumAll(tab)}</p>
			<p>{sumAll2(tab)}</p>
		</div>
	);
};
