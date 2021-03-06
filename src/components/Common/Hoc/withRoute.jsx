import {useNavigate} from "react-router";
import {useEffect} from "react";


const withRoute = (Component) => (props) => {


    let navigator = useNavigate()
    useEffect(() => {
    }, [navigator])

    return <Component  {...props}/>


}

export default withRoute
