const GET_MATH_DATA = 'getMathData'
const GET_PHISICS_DATA = 'getPhisicsData'

let initialState = {
    mathData: [
        {id: '1',
            eng:{

                name: 'Magnetism',
                formulas: ['F = B*I*L*sinα', 'F = B*Q*V', 'Ф = S*B*sinβ'],
                discription: ['B = induction', 'I = amperage', 'L = lenght',
                    'Q = charge', 'V = speed', 'α = angle between B and I', 'β = angle between B and normal']
            },
        rus:{

            name: 'Магнетизм',
            formulas: ['F = B*I*L*sinα', 'F = B*Q*V', 'Ф = S*B*sinβ'],
            discription: ['B = Индукция', 'I = Сила тока', 'L = длинна', 'Q = заряд',
                'V = скорость', 'α = угол между B и I', 'β = угол между B и нормалью']
        },
        },

        {id: '2', name: 'math222', formulas: ['formulacool3'], discription: ['some description2']}
    ],
    phisicData: [
        {id: '1', name: 'hellopis1111', formulas: ['formulacool4'], discription: ['some description3']},
        {id: '2', name: 'hello2phis222', formulas: ['formulacool5'], discription: ['some description4']}
    ],
    currentTopic: {}
}


const TopicPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MATH_DATA:
            return {
                ...state,
                currentTopic: {...state.mathData.filter(({id}) => id === action.id)}
            }
        case GET_PHISICS_DATA:
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