import css from './Footer.module.sass'
import wk from '../../images/wk_icon.png'
import tele from '../../images/telegram_icon.png'
import whatsApp from '../../images/whatsApp_icon.png'
import github from '../../images/github_icon.png'
const Footer = (props) => {
    return <div className={[css.footer, props.isLightMod ? css.footer_night : ''].join(' ')}>
        <span>© Copyright by Artem Romanov.</span>
        <div>
            <div><img
                src={github}
                alt=""/></div>
            <div><img src={whatsApp} alt=""/></div>
            <div><img src={wk} alt=""/></div>
            <div><img
                src={tele}
                alt=""/></div>
        </div>
    </div>
}
export default Footer