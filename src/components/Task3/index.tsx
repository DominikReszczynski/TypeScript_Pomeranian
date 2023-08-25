import './index.css';

type NumerArrayType = number[];

interface ItemInterface {
	id: number;
	name: string;
	surname?: string;
}
export const Task3 = () => {
	const myArray: NumerArrayType = [1, 2, 3, 4, 5];
	const items: ItemInterface[] = [
		{ id: 1, name: 'Item1', surname: 'Resz' },
		{ id: 2, name: 'Item2' },
		{ id: 3, name: 'Item3' },
	];
	return (
		<div className='conteinertypescript-task1'>
			Taske 3
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						name:{item.name}, surename:
						{item?.surname === undefined ? 'no surname' : item.surname}
					</li>
				))}
			</ul>
		</div>
	);
};
