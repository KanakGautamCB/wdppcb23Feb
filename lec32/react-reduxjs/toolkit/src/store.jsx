import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice/CounterSlice';
import colorReducer from './slices/colorSlice/ColorSlice';


export default configureStore({
    reducer: {
        counter: counterReducer,
        color: colorReducer
    }
}); 


