import css from './ChoosingPage.module.sass'
import {NavLink} from "react-router-dom";

const ChoosingPage = (props) => {
    return <div className={css.ChoosingPage}>
        <span>
            <div></div>
            Choose your topic
        </span>
        <div className={css.topics__container}>
            <NavLink to='topic'>
                <span></span><span></span><span></span><span></span>
                topic one
            </NavLink>
            <NavLink to='topic'>
                <span></span><span></span><span></span><span></span>
                topic two
            </NavLink>

        </div>
    </div>

}
export default ChoosingPage