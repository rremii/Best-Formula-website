import css from './TopicPage.module.sass'
import {useEffect} from "react";

const TopicPage = (props) => {

    return <div className={[css.wrapper, props.isLightMod ? "" : css.wrapper_night].join(' ')}>
        <div className={css.name}>
            <span>{props.name}</span>
        </div>
        <div className={css.container}>

            <div className={css.formulas}>
                <div>
                    Formulas
                </div>
                <div>
                    {props?.formulas?.map(formula => {
                        return <span key={formula}>{formula}</span>

                    })}
                </div>
            </div>
            <div className={css.discription}>
                <div>
                    Discription
                </div>
                <div>
                    {props?.discription?.map(formula => {
                        return <span key={formula}>{formula}</span>
                    })}
                </div>
            </div>
        </div>
    </div>
}
export default TopicPage