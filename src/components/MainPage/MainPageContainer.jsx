import MainPage from "./MainPage";
import {connect} from "react-redux";
import {compose} from "redux";

const MainPageContainer = (props) => {
    return <MainPage     {...props}  />
}
let mapStateToProps = (state) => {
    return {
        isLightMod: state.MainVariables.isLightMod,
    }
}
export default compose(
    connect(mapStateToProps, {})
)(MainPageContainer)