// import { createStore } from "redux";
// import { appReducer } from "./appRedux"

// const store = createStore(appReducer);

// export default store;

/**
 * * Forma 2 *
 */

import { configureStore } from "@reduxjs/toolkit";
import { cursoSlice } from "./slices/todos/todoSlice";

export const store = configureStore({
    reducer: {
        curso: cursoSlice.reducer,
    }
})