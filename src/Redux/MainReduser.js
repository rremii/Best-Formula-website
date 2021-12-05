const TOGGLE_LIGHT_MOD = 'TOGGLE_LIGHT_MOD'
const TOGGLE_PREROLL = 'TOGGLE_PREROLL'
const TOGGLE_PREROLL_TO_NIGHT = 'TOGGLE_PREROLL_TO_NIGHT'
const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR'
const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS'
const URL = 'URL'

let initialState = {
    // url: '',
    isSettings: false,
    isNavBar: false,
    isLightMod: false,
    isPreroll: false,
    isPrerollNight: false,
}


const MainReducer = (state = initialState, action) => {

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

        case TOGGLE_NAVBAR:
            return {
                ...state,
                isNavBar: !state.isNavBar
            }
        case TOGGLE_SETTINGS:
            return {
                ...state,
                isSettings: !state.isSettings
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
export const toggleNavBar = () => {
    return {type: TOGGLE_NAVBAR}
}
export const toggleSettings = () => {
    return {type: TOGGLE_SETTINGS}
}
export default MainReducer