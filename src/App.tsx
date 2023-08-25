// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Task1 } from './components/Task1';
import './App.css';
import { Task2 } from './components/Task2';
import { Task3 } from './components/Task3';
import { Task4 } from './components/Task4';

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className='conteiner--app'>
			<Task1
				taskName={'task1'}
				taskId={1}
				doTask={(jakisParam) => jakisParam}
			/>
			<br />
			<br />
			Task2
			<br />
			<Task2 />
			<br />
			<Task3 />
			<br />
			<Task4 />
		</div>
	);
}

export default App;
