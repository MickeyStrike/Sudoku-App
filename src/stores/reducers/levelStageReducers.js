const initialState = {
    level: ''
}

const levelReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LEVEL_STAGE' :
            state.level = action.payload
            return state
        default :
            return state
    }
}

export default levelReducers