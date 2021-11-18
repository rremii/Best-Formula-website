import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

const withRoute = (Component) => (props) => {

    let navigator = useNavigate()
    useEffect(() => {
    }, [navigator])
    return <Component {...props}/>

}
export default withRoute