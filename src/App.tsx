import { FC, useState } from 'react'

import styles from './styles/App.module.scss'

const App: FC = () => {
	const [counter, setCounter] = useState<number>(0)
	console.log('App')
	return (
		<div className={styles.app}>
			<button onClick={() => setCounter(prevState => prevState - 1)}>-</button>
			<h1>{counter}</h1>
			<button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
		</div>
	)
}

export default App
