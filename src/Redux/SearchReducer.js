import choosingPageReducer from "./ChoosingPageReducer";

const GET_SEARCH_DATA = 'GET_SEARCH_DATA'
const SET_SEARCH_STRING = 'SET_SEARCH_STRING'


let initialState = {
    searchString: '',
    phisicData: {
        eng: [
            {id: '1', topic: 'magnetism', type: 'phis', url: 'phisics'},
            {id: '2', topic: 'phicis2', type: 'phis', url: 'phisics'},
            {id: '3', topic: 'phicis3', type: 'phis', url: 'phisics'},
            {id: '4', topic: 'phicis4', type: 'phis', url: 'phisics'},
            {id: '5', topic: 'phicis5', type: 'phis', url: 'phisics'},
            {id: '6', topic: 'phicis6', type: 'phis', url: 'phisics'},
            {id: '7', topic: 'phicis7', type: 'phis', url: 'phisics'},
        ],
        rus: [
            {id: '1', topic: 'магнетизм', type: 'физ', url: 'phisics'},
            {id: '2', topic: 'физика2', type: 'физ', url: 'phisics'},
            {id: '3', topic: 'физика3', type: 'физ', url: 'phisics'},
            {id: '4', topic: 'физика4', type: 'физ', url: 'phisics'},
            {id: '5', topic: 'физика5', type: 'физ', url: 'phisics'},
            {id: '6', topic: 'физика6', type: 'физ', url: 'phisics'},
            {id: '7', topic: 'физика7', type: 'физ', url: 'phisics'},

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
                        ...state.mathData.eng.filter(({id, topic}) => topic.includes(state?.searchString !== '' &&
                            state?.searchString?.toLowerCase())).map(({id, topic, type,url}) => {
                                return {id, topic, type, url}
                            }
                        ),
                        ...state.phisicData.eng.filter(({id, topic}) => topic.includes(state?.searchString !== '' &&
                            state?.searchString?.toLowerCase())).map(({id, topic, type,url}) => {
                                return {id, topic, type, url}
                            }
                        ),
                    ]
                    :
                    [
                        ...state.mathData.rus.filter(({id, topic}) => topic.includes(state?.searchString !== '' &&
                            state?.searchString?.toLowerCase())).map(({id, topic, type,url}) => {
                                return {id, topic, type, url}
                            }
                        ),
                        ...state.phisicData.rus.filter(({id, topic}) => topic.includes(state?.searchString !== '' &&
                            state?.searchString?.toLowerCase())).map(({id, topic, type,url}) => {
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