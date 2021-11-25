import css from './TopicPage.module.sass'
import {useEffect} from "react";

const TopicPage = (props) => {

    // useEffect(()=>{
    //     props.url(window.location.pathname)
    //     console.log(window.location.pathname)
    // },[window.location.pathname])
    // console.log(props)
    return <div className={[css.wrapper,props.isLightMod?css.wrapper_night:''].join(' ')}>
        <div className={css.name}>
            <span>{props.name}</span>
        </div>
        <div className={css.content}>
            <div>
                {props?.formulas?.map(formula => {
                    return <span>{formula}</span>

                })}


            </div>
            <div>
                {props.discription}
            </div>
        </div>
    </div>
}
export default TopicPage