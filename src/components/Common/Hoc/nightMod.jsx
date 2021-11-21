import {useEffect, useState} from "react";


const nightMod = (Component) => (props) => {

    setTimeout(() => {

    }, 700)
        useEffect(() => {
        }, [props.isLightMod])

    return <Component   {...props}/>

}

export default nightMod

