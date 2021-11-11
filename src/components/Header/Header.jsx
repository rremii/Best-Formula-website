import css from './Header.module.sass'
import gearWheel from './../../images/white-gear-icon-png-13.jpg'
import {useState} from "react";

const Header = (props) => {

    let [isActive, toggleActive] = useState(false)
    window.active = isActive

    const header = (props) => {
        if (isActive) toggleActive(false)
        else toggleActive(true)
    }


    return (<div className={css.header}>
        <div>B F</div>
        <div >
            <img className={(isActive ? css.active_img : css.notActive_img)} onClick={header}  src={gearWheel} alt=""/>
        </div>
            <div  className={[css.pop_up,isActive && css.active].join(' ')}>im a pop up</div>
    </div>)
}
export default Header