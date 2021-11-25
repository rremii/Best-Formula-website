import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const withRoute = (Component) => (props) => {


    let navigator = useNavigate()
    let a = window.location.pathname
    useEffect(() => {
        console.log(window.location.pathname)
    }, [navigator])

    return <Component a={a} {...props}/>


}

export default withRoute
// let mapStateToProps = (state) => {
//     return {
//         url: state.MainVariables.url
//     }
// }
// export default compose(
//     connect(mapStateToProps, {})
// )(withRoute)