import css from './ChoosingPage.module.sass'
import {NavLink} from "react-router-dom";

const ChoosingPage = (props) => {
    // console.log(props.choosingPage)
    return <div className={css.ChoosingPage}>
        <span>
            <div></div>
            Choose your topic
        </span>
        <div className={css.topics__container}>
            {props.choosingPage.map(({id, topic}) => {
                return <NavLink key={id} to={ '' + id}>
                    <span></span><span></span><span></span><span></span>
                    {topic}
                </NavLink>
            })}


        </div>
    </div>

}
export default ChoosingPage