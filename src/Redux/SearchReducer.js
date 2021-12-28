import choosingPageReducer from "./ChoosingPageReducer";

const GET_SEARCH_DATA = 'GET_SEARCH_DATA'
const SET_SEARCH_STRING = 'SET_SEARCH_STRING'


let initialState = {
    searchString: '',
    phisicData: {
        eng: [
            {id: '1', topic: 'Kinematics', type: 'phis', url: 'phisics'},
            {id: '2', topic: 'Dynamics', type: 'phis', url: 'phisics'},
            {id: '3', topic: 'Thermodynamics', type: 'phis', url: 'phisics'},
            {id: '4', topic: 'Mechanical work', type: 'phis', url: 'phisics'},
            {id: '5', topic: 'MKT', type: 'phis', url: 'phisics'},
            {id: '6', topic: 'Electrostatics', type: 'phis', url: 'phisics'},
            {id: '7', topic: 'Direct current', type: 'phis', url: 'phisics'},
            {id: '7', topic: 'Magnetism', type: 'phis', url: 'phisics'},
        ],
        rus: [
            {id: '1', topic: 'Кинематика', type: 'физ', url: 'phisics'},
            {id: '2', topic: 'Динамика', type: 'физ', url: 'phisics'},
            {id: '3', topic: 'Термодинамика', type: 'физ', url: 'phisics'},
            {id: '4', topic: 'Механическая работа', type: 'физ', url: 'phisics'},
            {id: '5', topic: 'MKT', type: 'физ', url: 'phisics'},
            {id: '6', topic: 'Электростатика', type: 'физ', url: 'phisics'},
            {id: '7', topic: 'Постоянный ток', type: 'физ', url: 'phisics'},
            {id: '7', topic: 'Магнетизм', type: 'физ', url: 'phisics'},

        ]
    },
    mathData: {
        eng: [
            {id: '1', topic: 'math1', type: 'math', url: 'math'},
            {id: '2', topic: 'math2', type: 'math', url: 'math'},
            {id: '3', topic: 'math3', type: 'math', url: 'math'},
            {id: '4', topic: 'math4', type: 'math', url: 'math'},
            {id: '5', topic: 'math5', type: 'math', url: 'math'},
            {id: '6', topic: 'math6', type: 'math', url: 'math'},
            {id: '7', topic: 'math7', type: 'math', url: 'math'},

        ],
        rus: [
            {id: '1', topic: 'матем1', type: 'мат', url: 'math'},
            {id: '2', topic: 'матем2', type: 'мат', url: 'math'},
            {id: '3', topic: 'матем3', type: 'мат', url: 'math'},
            {id: '4', topic: 'матем4', type: 'мат', url: 'math'},
            {id: '5', topic: 'матем5', type: 'мат', url: 'math'},
            {id: '6', topic: 'матем6', type: 'мат', url: 'math'},
            {id: '7', topic: 'матем7', type: 'мат', url: 'math'},

        ],
    },
    searchingData: []
}


const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_DATA:
            return {
                ...state,
                searchingData: action.language === 'eng' ? [
                        ...state.mathData.eng.filter(({id, topic}) => topic.toLowerCase().includes(state?.searchString !== '' &&
                            state?.searchString?.toLowerCase())).map(({id, topic, type, url}) => {
                                return {id, topic, type, url}
                            }
                        ),
                        ...state.phisicData.eng.filter(({id, topic}) => topic.toLowerCase().includes(state?.searchString !== '' &&
                            state?.searchString?.toLowerCase())).map(({id, topic, type, url}) => {
                                return {id, topic, type, url}
                            }
                        ),
                    ]
                    :
                    [
                        ...state.mathData.rus.filter(({id, topic}) => topic.toLowerCase().includes(state?.searchString !== '' &&
                            state?.searchString?.toLowerCase())).map(({id, topic, type, url}) => {
                                return {id, topic, type, url}
                            }
                        ),
                        ...state.phisicData.rus.filter(({id, topic}) => topic.toLowerCase().includes(state?.searchString !== '' &&
                            state?.searchString?.toLowerCase())).map(({id, topic, type, url}) => {
                                return {id, topic, type, url}
                            }
                        ),
                    ]
            }
        case SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.string && action.string !== '' ? action.string : ''
            }

        default:
            return state
    }
}
export const getSearchData = (language) => {
    return {type: GET_SEARCH_DATA, language}
}
export const setSearchString = (string) => {
    return {type: SET_SEARCH_STRING, string}
}

export default SearchReducer