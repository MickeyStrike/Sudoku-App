const initialState = {
    result: 0,
    totalCol: 0
}

const resultReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RESULT_TO_RESULT' :
            state.result += action.payload.result
            state.totalCol += action.payload.totalCol
            return state
        default :
            return state
    }
}

export default resultReducers