const GET_MATH_DATA = 'getMathData'
const GET_PHISICS_DATA = 'getPhisicsData'

let initialState = {
    mathData: [
        {id: '1', name: 'math1111', formulas: ['formulacool2'], discription: 'some description1'},
        {id: '2', name: 'math222', formulas: ['formulacool3'], discription: 'some description2'}
    ],
    phisicData: [
        {id: '1', name: 'hellopis1111', formulas: ['formulacool4'], discription: 'some description3'},
        {id: '2', name: 'hello2phis222', formulas: ['formulacool5'], discription: 'some description4'}
    ],
    currentTopic: {}
}


const TopicPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MATH_DATA:
            debugger
            return {
                ...state,
                currentTopic: {...state.mathData.filter(({id}) => id === action.id)}
            }
        case GET_PHISICS_DATA:
            debugger
            return {
                ...state,
                currentTopic: {...state.phisicData.filter(({id}) => id === action.id)}
            }

        default:
            return state
    }
}
export const getMathData = ({id}) => {
    return {type: GET_MATH_DATA, id}
}
export const getPhisicsData = ({id}) => {
    return {type: GET_PHISICS_DATA, id}
}
export default TopicPageReducer