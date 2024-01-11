import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counterSlice';

function App() {
	const { count } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div className="w-full bg-slate-100 text-center m-5 p-5">
			<h1 className="text-3xl font-semibold mb-3">Counter</h1>

			<div className="flex gap-4 justify-center items-center p-5 bg-slate-300">
				<button onClick={() => dispatch(increment())} className="p-2 bg-green-600 rounded-md text-white">
					Increment
				</button>
				<h2 className="text-4xl">{count}</h2>
				<button onClick={() => dispatch(decrement())} className="p-2 bg-red-600 rounded-md text-white">
					Decrement
				</button>
			</div>
		</div>
	);
}

export default App;
