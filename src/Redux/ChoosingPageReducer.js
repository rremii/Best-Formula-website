

let initialState = {
    phisicTopics:[
        {id:1,topic:{
            eng:'Kinematics',
            rus:'Кинематика',
            }},
        {id:2,topic:{
                eng:'Magnetism',
                rus:'Магнетизм',
            }},
        {id:3,topic:{
                eng:'optics',
                rus:'оптика',
            }},
        {id:4,topic:{
                eng:'kinematics',
                rus:'кинематика',
            }},
        {id:5,topic:{
                eng:'mechannika',
                rus:'механника',
            }},
        {id:6,topic:{
                eng:'warmth',
                rus:'теплота',
            }},
        {id:7,topic:{
                eng:'energy',
                rus:'эниргии',
            }},

    ],
    mathTopics:[
        {id:1,topic:{
                eng:'math1',
                rus:'матем1',
            }},
        {id:2,topic:{
                eng:'math2',
                rus:'матем2',
            }},
        {id:3,topic:{
                eng:'math3',
                rus:'матем3',
            }},
        {id:4,topic:{
                eng:'math4',
                rus:'матем4',
            }},
        {id:5,topic:{
                eng:'math5',
                rus:'матем5',
            }},
        {id:6,topic:{
                eng:'math6',
                rus:'матем6',
            }},
        {id:7,topic:{
                eng:'math7',
                rus:'матем7',
            }},
    ]
}


const choosingPageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}


export default choosingPageReducer