const TOGGLE_LIGHT_MOD = 'TOGGLE_LIGHT_MOD'
const TOGGLE_PREROLL = 'TOGGLE_PREROLL'
const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR'
const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS'
const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE'


let initialState = {

    isSettings: false,
    isNavBar: false,
    isLightMod: true,
    isPreroll: false,
    isPrerollNight: false,
    language: 'eng',
}


const MainReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_LIGHT_MOD:
            return {
                ...state,
                isLightMod: action.mode
            }
        case TOGGLE_PREROLL:
            return {
                ...state,
                isPreroll: state.isPreroll = action.toggleTo,
                isPrerollNight: !state.isLightMod

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
        case TOGGLE_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        default:
            return state
    }
}
export const toggleLightMod = (mode) => {
    return {type: TOGGLE_LIGHT_MOD, mode}
}
export const togglePreroll = (toggleTo) => {
    return {type: TOGGLE_PREROLL, toggleTo}
}

export const toggleNavBar = () => {
    return {type: TOGGLE_NAVBAR}
}
export const toggleSettings = () => {
    return {type: TOGGLE_SETTINGS}
}
export const toggleLanguage = (language) => {
    return {type: TOGGLE_LANGUAGE, language}
}
export default MainReducer