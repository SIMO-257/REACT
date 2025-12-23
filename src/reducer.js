const initialState = {
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
export default Reducer;