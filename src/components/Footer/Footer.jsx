import css from './Footer.module.sass'
import wk from '../../images/wk_icon.png'
import tele from '../../images/telegram_icon.png'
import whatsApp from '../../images/whatsApp_icon.png'
import github from '../../images/github_icon.png'
const Footer = (props) => {
    return <div className={[css.footer, props.isLightMod ? css.footer_night : ''].join(' ')}>


    </div>
}
export default Footer