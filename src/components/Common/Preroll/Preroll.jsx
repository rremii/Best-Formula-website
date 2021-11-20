import {useEffect, useState} from "react";
import css from './preroll.module.sass'

const Preroll = () => {

    let [isPreloll, togglePreloll] = useState(false)

    useEffect(() => {
        togglePreloll(true)
        setTimeout(() => {
                togglePreloll(false)
            }, 700
        )
    }, [])

    return (
        <>
            {
                isPreloll && <div className={css.preroll}>
                    <span/>
                </div>
            }
        </>
    )

}
export default Preroll