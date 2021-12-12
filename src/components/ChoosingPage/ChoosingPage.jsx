import css from './ChoosingPage.module.sass'
import {NavLink} from "react-router-dom";

const ChoosingPage = (props) => {
    // console.log(props.choosingPage)
    return <div className={[css.ChoosingPage].join(' ')}>
        {props.choosingPage.map(({id, topic}) => {
            return <div key={id} className={css.topicContainer}>
                <NavLink to={'' + id}>{topic}</NavLink>
            </div>
        })}

    </div>

}
export default ChoosingPage