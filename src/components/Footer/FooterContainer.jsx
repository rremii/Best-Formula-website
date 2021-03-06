import Footer from "./Footer";
import {connect} from "react-redux";
import {compose} from "redux";

const FooterContainer=(props)=>{
    return <Footer {...props}/>
}


let mapStateToProps=(state)=>{
    return{
        isLightMod: state.MainVariables.isLightMod,
        language: state.MainVariables.language,

    }
}
export default compose(
    connect(mapStateToProps,{})
)(FooterContainer)