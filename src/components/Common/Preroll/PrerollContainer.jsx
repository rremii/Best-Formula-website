import Preroll from "./Preroll";
import {compose} from "redux";
import {connect} from "react-redux";

const PrerollContainer=(props)=>{
    return <Preroll {...props} />
}



let mapStateToProps = (state) => {
    return {
        // isPreroll: state.MainVariables.isPreroll,
        // isPrerollNight: state.MainVariables.isPrerollNight,
        // isLightMod: state.MainVariables.isLightMod

    }
}
export default compose(
    connect(mapStateToProps, {}),
)(PrerollContainer)
