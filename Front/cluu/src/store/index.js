import { configureStore } from "@reduxjs/toolkit";
// highlight-next-line
import counterReducer from "../features/counter/counterSlice";


export default configureStore({
  reducer: {
    // highlight-next-line
    counter: counterReducer,
  },
});