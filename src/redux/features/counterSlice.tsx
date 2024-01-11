import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type TCounter = {
	count: number;
};
const initialState: TCounter = { count: 0 };
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.count = state.count + 1;
		},
		incrementByValue: (state, action: PayloadAction<number>) => {
			state.count = state.count + action.payload;
		},
		decrement: (state) => {
			state.count = state.count - 1;
		}
	}
});

export const { increment, incrementByValue, decrement } = counterSlice.actions;
export default counterSlice.reducer;
