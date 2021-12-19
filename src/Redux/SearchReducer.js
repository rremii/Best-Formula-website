import choosingPageReducer from "./ChoosingPageReducer";

const GET_SEARCH_DATA = 'GET_SEARCH_DATA'
const SET_SEARCH_STRING = 'SET_SEARCH_STRING'


let initialState = {
    searchString: '',
    mathData: [
        {id: '1', topic: 'magnetism', type: 'math'},
        {id: '2', topic: 'some name1', type: 'math'},
        {id: '3', topic: 'hey mert', type: 'math'},
        {id: '4', topic: 'guys i really need a server', type: 'math'},
    ],
    phisicData: [
        {id: '1', topic: 'topic2', type: 'phisics'},
        {id: '2', topic: 'some name2', type: 'phisics'},
        {id: '3', topic: 'fk ur assh*le', type: 'phisics'},
        {id: '4', topic: 'thats sad tho', type: 'phisics'},

    ],
    searchingData: []
}


const SearchReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_SEARCH_DATA:
            return {
                ...state,
                searchingData: [
                    ...state.mathData.filter(({id, topic}) => topic.includes(state?.searchString !== '' &&
                        state?.searchString?.toLowerCase())).map(({id, topic, type}) => {
                            return {id, topic, type}
                        }
                    ),
                    ...state.phisicData.filter(({id, topic}) => topic.includes(state?.searchString !== '' &&
                        state?.searchString?.toLowerCase())).map(({id, topic, type}) => {
                            return {id, topic, type}
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
export const getSearchData = () => {
    return {type: GET_SEARCH_DATA,}
}
export const setSearchString = (string) => {
    return {type: SET_SEARCH_STRING, string}
}

export default SearchReducer