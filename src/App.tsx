import { decrement, increment, incrementByValue } from './redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
	const { count } = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();
	return (
		<div className="w-full bg-slate-100 text-center m-5 p-5">
			<h1 className="text-3xl font-semibold mb-3">Counter</h1>

			<div className="flex gap-4 justify-center items-center p-5 bg-slate-300">
				<button onClick={() => dispatch(increment())} className="p-2 bg-green-600 rounded-md text-white">
					Increment
				</button>
				<button onClick={() => dispatch(incrementByValue(5))} className="p-2 bg-green-600 rounded-md text-white">
					Increment by 5
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
