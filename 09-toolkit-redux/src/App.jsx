import reactLogo from './assets/react.svg'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter'
import './App.css'

function App() {

	const {counter} = useSelector(state => state.counter)
	const dispatch = useDispatch()

	return (
	<div className="App">
		<div>
			<img src="/vite.svg" className="logo" alt="Vite logo" />
			<img src={reactLogo} className="logo react" alt="React logo" />
		</div>
		<h1>Count is {counter}</h1>
		<div className="card">
			<button type="button" onClick={() => dispatch(increment())}>Increment</button>
			<button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
			<button type="button" onClick={() => dispatch(incrementBy(2))}>Increment by 2</button>
		</div>
	</div>
  )
}

export default App
