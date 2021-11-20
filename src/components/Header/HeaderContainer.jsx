import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {toggleLightMod} from "../../Redux/MainReduser";

const HeaderContainer = (props) => {
    return <Header {...props} />
}
let mapStateToProps = (state) => {
    return {
        isLightMod: state.MainVariables.isLightMod
    }
}
export default compose(
    connect(mapStateToProps, {toggleLightMod})
)(HeaderContainer)