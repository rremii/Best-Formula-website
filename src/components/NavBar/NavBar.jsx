import css from './NavBar.module.sass'
import {useState} from "react";


const NavBar = (props) => {

    let [isActive, toggleActive] = useState(false)

    const navBar = () => {
        if (isActive) toggleActive(false)
        else toggleActive(true)
    }

    return (<div  className={[css.NavBar, isActive && css.active].join(' ')}>
        <div onClick={navBar}>
            <span> </span>
            <span> </span>
            <span> </span>
        </div>

    </div>)
}
export default NavBar