import css from './ChoosingPage.module.sass'
import {NavLink} from "react-router-dom";
import {useState} from "react";

const ChoosingPage = (props) => {
    // console.log(props.choosingPage)

    let [current, setCurrent] = useState(1)
    let [translateTo, setTranslateTo] = useState(100)
    const setCurrentId = (id) => {
        console.log(id)
        setCurrent(id)
    }
    return <div className={[css.ChoosingPage].join(' ')}>
        <div className={css.barrel}
             // onTouchStart={() => setCurrentId(current + 1 >
             // props.choosingPage.length ? 1 : current + 1)}
             // onTouchEnd={() => setCurrentId(current - 1 === 0
             //     ? props.choosingPage.length : current - 1)}
        >
            {props.choosingPage.map(({id, topic}) => {
                let translateBy
                let isMain = 0


//////////////MAIN ONE
                if (id === current) {
                    translateBy = 0
                    // isMain = 50
                }
                if (id === current + 1) {
                    translateBy = 100
                    // isMain = 50
                }
                if (id === current + 2) {
                    translateBy = 200
                    // isMain = 50
                }
                if (id === current + 3) {
                    translateBy = 300
                    // isMain = 50
                }
                if (id === current - 1) {
                    translateBy = -100
                    // isMain = 50
                }
                if (id === current - 2) {
                    translateBy = -200
                    // isMain = 50
                }
                if (id === current - 3) {
                    translateBy = -300
                    // isMain = 50
                }


////////////////CURRENT = 1
                if (current === 1) {
                    if (id === props.choosingPage.length) {
                        translateBy = -100
                        // isMain = 50
                    }
                    if (id === props.choosingPage.length - 1) {
                        translateBy = -200
                        // isMain = 50
                    }
                    if (id === props.choosingPage.length - 2) {
                        translateBy = -300
                        // isMain = 50
                    }
                }
/////////////////////CURRENT = 2
                if (current === 2) {
                    if (id === 1) {
                        translateBy = -100
                        // isMain = 50
                    }
                    if (id === props.choosingPage.length) {
                        translateBy = -200
                        // isMain = 50
                    }
                    if (id === props.choosingPage.length - 1) {
                        translateBy = -300
                        // isMain = 50
                    }
                }
////////////////////CURRENT = 3
                if (current === 3) {
                    if (id === 2) {
                        translateBy = -100
                        // isMain = 50
                    }
                    if (id === 1) {
                        translateBy = -200
                        // isMain = 50
                    }
                    if (id === props.choosingPage.length) {
                        translateBy = -300
                        // isMain = 50
                    }
                }
/////////////////////////CURRENT = MAX
                if (current === props.choosingPage.length) {
                    if (id === 1) {
                        translateBy = 100
                        // isMain = 50
                    }
                    if (id === 2) {
                        translateBy = 200
                        // isMain = 50
                    }
                    if (id === 3) {
                        translateBy = 300
                        // isMain = 50
                    }
                }
/////////////////////////////CURRENT = MAX - 1
                if (current === props.choosingPage.length - 1) {
                    if (id === props.choosingPage.length) {
                        translateBy = 100
                        // isMain = 50
                    }
                    if (id === 1) {
                        translateBy = 200
                        // isMain = 50
                    }
                    if (id === 2) {
                        translateBy = 300
                        // isMain = 50
                    }
                }
//////////////////////////////CURRENT = MAX - 2
                if (current === props.choosingPage.length - 2) {
                    if (id === props.choosingPage.length - 1) {
                        translateBy = 100
                        // isMain = 50
                    }
                    if (id === props.choosingPage.length) {
                        translateBy = 200
                        // isMain = 50
                    }
                    if (id === 1) {
                        translateBy = 300
                        // isMain = 50
                    }
                }


                return <div key={id}
                            className={[css.cell,
                                !translateBy && translateBy !== 0 ? css.extra : '',

                                translateBy === 0 ? css.middle : '',
                                translateBy === 100 ? css.secondDown : '',
                                translateBy === -100 ? css.secondUp : '',
                                translateBy === 200 ? css.thirdDown : '',
                                translateBy === -200 ? css.thirdUp : '',
                                translateBy === 300 ? css.forthDown : '',
                                translateBy === -300 ? css.forthUp : '',
                            ].join(' ')}
                            onClick={() => setCurrentId(id)}


                >

                    <NavLink className={id !== current ? css.disable : ''} to={'' + id}>{topic}{''}</NavLink>
                </div>
            })}
        </div>

    </div>

}
export default ChoosingPage