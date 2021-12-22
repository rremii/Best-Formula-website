

let initialState = {
    mathTopics:[
        {id:1,topic:{
            eng:'Magnetism',
            rus:'Магнетизм',
            }},
        {id:2,topic:{
                eng:'direct current',
                rus:'постоянный ток',
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
    phisicTopics:[
        {id:1,topic:'hellopis'},
        {id:2,topic:'hello2phis'},
        {id:3,topic:'topic3'},
        {id:4,topic:'topic4'},
        {id:5,topic:'topic5'},
        {id:6,topic:'topic6'},
    ]
}


const choosingPageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}


export default choosingPageReducer