import css from './Footer.module.sass'
import wk from '../../images/wk_icon.png'
import tele from '../../images/telegram_icon.png'
import whatsApp from '../../images/whatsApp_icon.png'
import github from '../../images/github_icon.png'
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return <div className={[css.Footer, props.isLightMod ? css.Footer_night : ''].join(' ')}>
    <span className={css.copyrite}>
        © by Artem Romanov,<br/>Firma design by DETKA
    </span>
        <div className={css.links}>
            <NavLink to='#'>
                <img src={wk} alt=""/>
            </NavLink>
            <NavLink to='#'>
                <img src={tele} alt=""/>
            </NavLink>
            <NavLink to='#'>
                <img src={whatsApp} alt=""/>
            </NavLink>
            <NavLink to='#'>
                <img src={github} alt=""/>
            </NavLink>
        </div>
    </div>
}
export default Footer