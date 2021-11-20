import {useEffect, useState} from "react";


const nightMod = (Component) => (props) => {


    useEffect(() => {
    }, [props.isLightMod])

    return <Component   {...props}/>

}

export default nightMod

