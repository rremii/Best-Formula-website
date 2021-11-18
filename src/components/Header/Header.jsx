import css from './Header.module.sass'
import gearWheel from './../../images/white-gear-icon-png-13.jpg'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    let [isActive, toggleActive] = useState(false)
    window.active = isActive

    const header = (props) => {
        if (isActive) toggleActive(false)
        else toggleActive(true)
    }


    let [isLightMod, toggleLightMod] = useState(false)
    const lightMod = () => {
        if (isLightMod) toggleLightMod(false)
        else toggleLightMod(true)
    }

    let[isLanguage,toggleLanguage]=useState(false)
    const language=()=>{
        if(isLanguage)toggleLanguage(false)
        else toggleLanguage(true)
    }

    // useEffect(()=>console.log('qwe'),[isLanguage])

    return (<div className={css.header}>
        <NavLink to='/' className={css.logo}>B F</NavLink>
        <div className={css.gearWheel}>
            <img className={(isActive ? css.active_img : css.notActive_img)} onClick={header} src={gearWheel} alt=""/>
        </div>
        <div className={[css.pop_up, isActive ? css.active :''].join(' ')}>
            <div className={[css.pop_up__lightLvl, isLightMod && css.pop_up__lightLvl__active].join(' ')}>
                <img onClick={() => toggleLightMod(false)}
                     src="https://cdn.iconscout.com/icon/premium/png-512-thumb/half-moon-2739808-2271148.png" alt=""/>
                <div onClick={lightMod}><span></span></div>
                <img onClick={() => toggleLightMod(true)}
                     src="https://static.tildacdn.com/tild3866-3436-4065-b562-613634306230/photo.png" alt=""/>
            </div>
            <div className={[css.pop_up__language,isLanguage ? css.pop_up__language__active : ''].join(' ')}>
                <span onClick={()=>toggleLanguage(false)}>Прив</span>
                <div onClick={language}><span></span></div>
                <span onClick={()=>toggleLanguage(true)}>Hey</span>

            </div>
        </div>
    </div>)
}
export default Header