const TOGGLE_LIGHT_MOD = 'TOGGLE_LIGHT_MOD'

let initialState = {
    isLightMod: false
}


const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LIGHT_MOD:
            debugger
            return {
                ...state,
                isLightMod: !state.isLightMod
            }
        default:
            return state
    }
}
export const toggleLightMod = () => {
    return {type: TOGGLE_LIGHT_MOD}
}
export default MainReducer