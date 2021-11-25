import css from './Header.module.sass'
import React from "react";
import gearWheel from './../../images/white-gear-icon-png-13.jpg'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {toggleLightMod, togglePrerollToNight} from "../../Redux/MainReduser";
import Preroll from "../Common/Preroll/Preroll";
import {getSearchData, setSearchString} from "../../Redux/SearchReducer";

const Header = (props) => {



    let [isActive, toggleActive] = useState(false)

    window.active = isActive

    const header = (props) => {
        if (isActive) toggleActive(false)
        else toggleActive(true)
    }


    let [isLightMod, toggleLightMod] = useState(false)
    const lightMod = (toggleTo) => {
        if (!toggleTo && toggleTo !== false) {
            if (isLightMod) {
                toggleLightMod(false)
            } else toggleLightMod(true)
        } else toggleLightMod(toggleTo)
        setTimeout(() => {

            toggleActive(false)


        }, 100)

        props.togglePreroll(true)


        if (props.isPrerollNight) props.togglePrerollToNight(false)
        else props.togglePrerollToNight(true)


        if (props.isPrerollNight) {
            props.togglePrerollToNight(false);
        }


        if (!props.isPrerollNight) {
            props.togglePrerollToNight(true);
        }
        /////
        setTimeout(() => {
            if (!props.isLightMod && toggleTo === true) {
                props.togglePreroll(false)
            }
            if (props.isLightMod && toggleTo === false) {
                props.togglePreroll(false)
            }
            if (!toggleTo) {
                props.togglePreroll(false)
            }
        }, 1500)

        setTimeout(() => {


            /////
            if (!toggleTo && toggleTo !== false) {
                props.toggleLightMod()
                // if (isLightMod) {
                //     toggleLightMod(false)
                // } else toggleLightMod(true)
            }
            /////
            if (props.isLightMod && toggleTo === false) {
                props.toggleLightMod();
            }


            if (!props.isLightMod && toggleTo === true) {
                props.toggleLightMod();
            }
        }, 1100)

    }

    let [isLanguage, toggleLanguage] = useState(false)
    const language = () => {
        if (isLanguage) toggleLanguage(false)
        else toggleLanguage(true)
    }


    let search = React.useRef()
    const getSearchData = () => {
        console.log(search.current.value)
        props.setSearchString(search.current.value)
        props.getSearchData()
    }

    return (<div className={[css.header, props.isLightMod ? css.header_night : ''].join(' ')}>


        <NavLink to='/' className={css.logo}>B F</NavLink>

        <div className={css.gearWheel}>
            <div className={css.search}>
                <input onChange={getSearchData} ref={search} value={props.searchingString} type="text"/>
                <div>
                    {
                        props.searchingData.map(({id, topic, type}) => {
                            return <NavLink key={topic} to={`${type}/${'' + id}`}>
                                {topic}-{type}
                            </NavLink>
                        })
                    }
                </div>
            </div>
            <img className={(isActive ? css.active_img : css.notActive_img)} onClick={header} src={gearWheel} alt=""/>
        </div>

        <div className={[css.pop_up, isActive ? css.active : ''].join(' ')}>

            <div className={[css.pop_up__lightLvl, isLightMod && css.pop_up__lightLvl__active].join(' ')}>

                <img className={!isLightMod ? css.disable : ''} onClick={() => lightMod(false)}
                     src="https://cdn.iconscout.com/icon/premium/png-512-thumb/half-moon-2739808-2271148.png" alt=""/>

                <div onClick={() => lightMod()}><span/></div>

                <img className={isLightMod ? css.disable : ''} onClick={() => lightMod(true)}
                     src="https://static.tildacdn.com/tild3866-3436-4065-b562-613634306230/photo.png" alt=""/>

            </div>

            <div className={[css.pop_up__language, isLanguage ? css.pop_up__language__active : ''].join(' ')}>
                <span onClick={() => toggleLanguage(false)}>Прив</span>

                <div onClick={language}><span></span></div>

                <span onClick={() => toggleLanguage(true)}>Hey</span>

            </div>

        </div>


    </div>)
}
export default Header


// import css from './Header.module.sass'
// import gearWheel from './../../images/white-gear-icon-png-13.jpg'
// import {useEffect, useState} from "react";
// import {NavLink} from "react-router-dom";
// import {toggleLightMod, togglePrerollToNight} from "../../Redux/MainReduser";
// import Preroll from "../Common/Preroll/Preroll";
//
// const Header = (props) => {
//
//
//     let [isActive, toggleActive] = useState(false)
//     window.active = isActive
//
//     const header = (props) => {
//         if (isActive) toggleActive(false)
//         else toggleActive(true)
//     }
//
//
//     let [isLightMod, toggleLightMod] = useState(false)
//     const lightMod = (toggleTo) => {
//
//         setTimeout(() => {
//
//             if (!toggleTo && toggleTo !== false) toggleActive(false)
//
//             if (!isLightMod && toggleTo === true) {
//                 toggleActive(false);
//             }
//
//
//             if (isLightMod && toggleTo === false) {
//                 toggleActive(false);
//             }
//         }, 100)
//
//         if (isLightMod !== toggleTo) props.togglePreroll(true)
//
//
//         /////
//         // if (!toggleTo && toggleTo !== false) {
//         //     props.toggleLightMod()
//         //     if (isLightMod) {
//         //         toggleLightMod(false)
//         //     } else toggleLightMod(true)
//         // } else toggleLightMod(toggleTo)
//
//         /////
//         if (!toggleTo && toggleTo !== false) {
//             if (props.isPrerollNight) props.togglePrerollToNight(false)
//             else props.togglePrerollToNight(true)
//         }
//
//         if (props.isPrerollNight && toggleTo === false) {
//             props.togglePrerollToNight(false);
//         }
//
//
//         if (!props.isPrerollNight && toggleTo === true) {
//             props.togglePrerollToNight(true);
//         }
//         /////
//         setTimeout(() => {
//             if (!props.isLightMod && toggleTo === true) {
//                 props.togglePreroll(false)
//             }
//             if (props.isLightMod && toggleTo === false) {
//                 props.togglePreroll(false)
//             }
//             if (!toggleTo) {
//                 props.togglePreroll(false)
//             }
//         }, 1500)
//
//         setTimeout(() => {
//
//
//             /////
//             if (!toggleTo && toggleTo !== false) {
//                 props.toggleLightMod()
//                 if (isLightMod) {
//                     toggleLightMod(false)
//                 } else toggleLightMod(true)
//             } else toggleLightMod(toggleTo)
//             /////
//             if (props.isLightMod && toggleTo === false) {
//                 props.toggleLightMod();
//             }
//
//
//             if (!props.isLightMod && toggleTo === true) {
//                 props.toggleLightMod();
//             }
//         }, 1100)
//
//     }
//
//     let [isLanguage, toggleLanguage] = useState(false)
//     const language = () => {
//         if (isLanguage) toggleLanguage(false)
//         else toggleLanguage(true)
//     }
//
//     // useEffect(()=>console.log('qwe'),[isLanguage])
//
//     return (<div className={css.header}>
//
//
//         <NavLink to='/' className={css.logo}>B F</NavLink>
//
//         <div className={css.gearWheel}>
//             <img className={(isActive ? css.active_img : css.notActive_img)} onClick={header} src={gearWheel} alt=""/>
//         </div>
//
//         <div className={[css.pop_up, isActive ? css.active : ''].join(' ')}>
//
//             <div className={[css.pop_up__lightLvl, isLightMod && css.pop_up__lightLvl__active].join(' ')}>
//
//                 <img className={!isLightMod ? css.disable : ''} onClick={() => lightMod(false)}
//                      src="https://cdn.iconscout.com/icon/premium/png-512-thumb/half-moon-2739808-2271148.png" alt=""/>
//
//                 <div onClick={() => lightMod()}><span/></div>
//
//                 <img className={isLightMod ? css.disable : ''} onClick={() => lightMod(true)}
//                      src="https://static.tildacdn.com/tild3866-3436-4065-b562-613634306230/photo.png" alt=""/>
//
//             </div>
//
//             <div className={[css.pop_up__language, isLanguage ? css.pop_up__language__active : ''].join(' ')}>
//                 <span onClick={() => toggleLanguage(false)}>Прив</span>
//
//                 <div onClick={language}><span></span></div>
//
//                 <span onClick={() => toggleLanguage(true)}>Hey</span>
//
//             </div>
//
//         </div>
//
//
//     </div>)
// }
// export default Header