const GET_MATH_DATA = "getMathData";
const GET_PHISICS_DATA = "getPhisicsData";

let initialState = {
    phisicData: [
        {
            id: "2",
            eng: {
                name: "Magnetism",
                formulas: [
                    "$$Fmax = BILsinα$$",
                    '$$F = BQV$$',
                    '$$Ф = BS cosβ$$',
                    '$$BQV = MV$$',
                    '$$BQV={MV^2\\over R}$$',
                    '$$ Eind=-{ΔФ\\over \\Delta T} $$',
                    '$$ Eind=BLVsinα $$',
                    '$$ Ф=LI $$',
                    "$$ W={LI^2 \\over 2}={Ф^2 \\over 2L}={ФI \\over 2} $$",
                ],
                discription: [
                    "B = induction",
                    "I = amperage",
                    "L = lenght",
                    "Q = charge",
                    "V = speed",
                    "α = angle between B and I",
                    "β = angle between B and normal",
                ],
            },
            rus: {
                name: "Магнетизм",
                formulas: ["$$Fmax = BILsinα$$",
                    '$$F = BQV$$',
                    '$$Ф = BScosβ$$',
                    '$$BQV = MV$$',
                    '$$BQV={MV^2\\over R}$$',
                    '$$ Eind=-{ΔФ\\over ΔT} $$',
                    '$$ Eind=BLVsinα $$',
                    '$$ Ф=LI $$',
                    "$$ W={LI^2 \\over 2}={Ф^2 \\over 2L}={ФI \\over 2} $$",],
                discription: [
                    "B = Индукция",
                    "I = Сила тока",
                    "L = длинна",
                    "Q = заряд",
                    "V = скорость",
                    "α = угол между B и I",
                    "β = угол между B и нормалью",
                ],
            },
        },
        {
            id: "1",
            eng: {
                name: "Kinematics",
                formulas: [
                    '$$ X={x_{0} \\pm v_{0}t \\pm {\\vec at^2 \\over 2}} $$',
                    '$$ u={u_{0} + {at^2 \\over 2}} $$',
                    '$$ \\vec v^2 - \\vec v_{0}^2 = 2a\\vec s $$',
                    '$$ \\lt v \\gt={{\\sum{s}} \\over \\sum{t}} $$',
                    '$$ u={{2\\pi R} \\over T} $$',
                    '$$ T={1 \\over \\nu} $$',
                    '$$ w={{2\\pi \\over T}} $$',
                    '$$ a={v^2 \\over R}={w^2R}={wv} $$',
                ],
                discription: [],
            },
            rus: {
                name: "Кинематика",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "3",
            eng: {
                name: "phisic3",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "физика3",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "4",
            eng: {
                name: "phisic4",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "физика4",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "5",
            eng: {
                name: "phisic5",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "физика5",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "6",
            eng: {
                name: "phisic6",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "физика6",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "7",
            eng: {
                name: "phisic7",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "физика7",
                formulas: [],
                discription: [],
            },
        },
    ],
    mathData: [
        {
            id: "1",
            eng: {
                name: "math1",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем1",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "2",
            eng: {
                name: "math2",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем2",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "3",
            eng: {
                name: "math3",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем3",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "4",
            eng: {
                name: "math4",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем4",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "5",
            eng: {
                name: "math5",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем5",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "6",
            eng: {
                name: "math6",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем6",
                formulas: [],
                discription: [],
            },
        },
        {
            id: "7",
            eng: {
                name: "math7",
                formulas: [],
                discription: [],
            },
            rus: {
                name: "матем7",
                formulas: [],
                discription: [],
            },
        },
    ],
    currentTopic: {},
};

const TopicPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MATH_DATA:
            return {
                ...state,
                currentTopic: {
                    ...state.mathData.filter(({id}) => id === action.id),
                },
            };
        case GET_PHISICS_DATA:
            return {
                ...state,
                currentTopic: {
                    ...state.phisicData.filter(({id}) => id === action.id),
                },
            };

        default:
            return state;
    }
};
export const getMathData = ({id}) => {
    return {type: GET_MATH_DATA, id};
};
export const getPhisicsData = ({id}) => {
    return {type: GET_PHISICS_DATA, id};
};
export default TopicPageReducer;
