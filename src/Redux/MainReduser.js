const TOGGLE_LIGHT_MOD = 'TOGGLE_LIGHT_MOD'
const TOGGLE_PREROLL = 'TOGGLE_PREROLL'
const TOGGLE_PREROLL_TO_NIGHT = 'TOGGLE_PREROLL_TO_NIGHT'

let initialState = {
    isLightMod: false,
    isPreroll: false,
    isPrerollNight: false,
}


const MainReducer = (state = initialState, action) => {
    debugger

    switch (action.type) {
        case TOGGLE_LIGHT_MOD:
            return {
                ...state,
                isLightMod: !state.isLightMod
            }
        case TOGGLE_PREROLL:
            return {
                ...state,
                isPreroll: state.isPreroll = action.toggleTo
            }
        case TOGGLE_PREROLL_TO_NIGHT:
            return {
                ...state,
                isPrerollNight: state.isPreroll = action.toggleTo
            }
        default:
            return state
    }
}
export const toggleLightMod = () => {
    return {type: TOGGLE_LIGHT_MOD}
}
export const togglePreroll = (toggleTo) => {
    return {type: TOGGLE_PREROLL, toggleTo}
}
export const togglePrerollToNight = (toggleTo) => {
    return {type: TOGGLE_PREROLL_TO_NIGHT, toggleTo}
}
export default MainReducer