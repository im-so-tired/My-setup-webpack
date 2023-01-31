import {FC, useState} from 'react';
import styles from './styles/App.module.scss'

const App:FC = () => {
	const [counter, setCounter] = useState<number>(0)
	return (
		<div className={styles.app}>
			<button onClick={() => setCounter(prevState => --prevState)}>-</button>
			<h1>{counter}</h1>
			<button onClick={() => setCounter(prevState => ++prevState)}>+</button>
		</div>
	);
};

export default App;
