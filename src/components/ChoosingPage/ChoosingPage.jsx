import css from './ChoosingPage.module.sass'
import {NavLink} from "react-router-dom";

const ChoosingPage = (props) => {
    // console.log(props.choosingPage)
    return <div className={[css.ChoosingPage, props.isLightMod ? css.ChoosingPage_night : ''].join(' ')}>

    </div>

}
export default ChoosingPage