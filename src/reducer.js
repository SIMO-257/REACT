import { createSlice } from "@reduxjs/toolkit";

const ticketsSlice = createSlice({
    name: "tickets",
    initialState: [],
    reducers: {
        Ajouter(state, action) {
            state.push(action.payload)
        },
        Supprimer(state, action) {
            return state.filter(t => t.id != action.payload)
        },
        Modifier(state, action) {
            return state.map(t => t.id == action.payload.id ? action.payload : t)
        }
    }

})

const compteurSlice = createSlice({
    name: "Compteur",
    initialState: 0,
    reducers: {
        Incrementer(state, action) {
            return (state += action.payload)
        },
        Decrementer(state, action) {
            return (state -= action.payload)
        }
    }

})     
export const { Incrementer, Decrementer } = compteurSlice.actions
export default compteurSlice.reducer;

/* const initialState = {
    tickets: []
}

const Reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case 'Ajouter':
            return {
                ...state,
                tickets: [...state.tickets, action.payload]
            };
 
        default: return (state)
    }
}
export default Reducer; */