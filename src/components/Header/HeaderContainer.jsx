import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {toggleLightMod, togglePreroll, togglePrerollToNight} from "../../Redux/MainReduser";

const HeaderContainer = (props) => {
    return <Header {...props} />
}
let mapStateToProps = (state) => {
    return {
        isLightMod: state.MainVariables.isLightMod,
        isPrerollNight: state.MainVariables.isPrerollNight,

    }
}
export default compose(
    connect(mapStateToProps, {toggleLightMod,togglePreroll,togglePrerollToNight,})
)(HeaderContainer)