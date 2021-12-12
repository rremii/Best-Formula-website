import {compose} from "redux";
import {connect} from "react-redux";
import {toggleLightMod, toggleNavBar} from "../../Redux/MainReduser";
import NavBar from "./NavBar";
import nightMod from "../Common/Hoc/nightMod";


const NavBarContainer = (props) => {
    return <NavBar {...props} />
}
let mapStateToProps = (state) => {
    return {
        isLightMod: state.MainVariables.isLightMod,
        isNavBar: state.MainVariables.isNavBar
    }
}
export default compose(
    connect(mapStateToProps, {
        toggleLightMod, toggleNavBar,
    }),
    nightMod,
)(NavBarContainer)