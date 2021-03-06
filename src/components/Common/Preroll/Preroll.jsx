import {useEffect, useState} from "react";
import css from './preroll.module.sass'

const Preroll = (props) => {

    let [isNight, toggleToNight] = useState(false)

    useEffect(() => {
        if (props.isPrerollNight === true) toggleToNight(false)
        if (props.isPrerollNight === false) toggleToNight(true)
    }, [props.isPreroll])
    return (
        <>
            {
                props.isPreroll ?
                    <div className={[props.isPrerollNight ? css.preroll_night : css.preroll].join(' ')}>
                        <span/>
                    </div>
                    : ''
            }
        </>
    )

}
export default Preroll