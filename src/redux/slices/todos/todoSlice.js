import { createSlice } from '@reduxjs/toolkit';


export const cursoSlice = createSlice({
    name: 'cursos',
    initialState: {
        cursos: [],
        contador: 0,
        cantidadCursos: 0,
        isLoading: false,
    },
    reducers: {
        addCurso: (state, actions) => {
            console.log("ACTIONS: ", actions)
            state.cursos.push(actions.payload);
            state.cantidadCursos += 1;
        },
        showTodo: (state) => {
            console.log(state.todos)
        },
        updateCurso: (state, actions) => {
            state.cursos = state.cursos.map(curso => {
                if (curso.id === actions.payload.id) {
                    return actions.payload
                }
                return curso
            })
        },
        deleteCurso: (state, actions) => {
            state.cursos = state.cursos.filter(curso => curso.id !== actions.payload.id)
            state.cantidadCursos -= 1;
        }
    }
});


export const { addCurso, deleteCurso, updateCurso } = cursoSlice.actions;