import {createSlice} from '@reduxjs/toolkit';

export const colorSlice = createSlice({
    name: 'color',
    initialState: {
        color: 'black',
    },
    reducers: {
        changeBlack: (state) => {
            state.color = 'black';
        },
        changeBlue: (state) => {
            state.color = 'blue';
        },
        changeRed: (state) => {
            state.color = 'red';
        },
        changeGreen: (state) => {
            state.color = 'green';
        },
    },
});

export const { changeBlack, changeBlue, changeRed, changeGreen } = colorSlice.actions;

export default colorSlice.reducer;