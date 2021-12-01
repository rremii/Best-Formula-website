import AboutPage from "./AboutPage";
import {compose} from "redux";
import {connect} from "react-redux";

const AboutPageContainer = (props) => {
    return <AboutPage {...props} />
}
let mapStateToProps = (state) => {
    return {
        // isLightMod: state.MainVariables.isLightMod
    }


}
export default compose(
    connect(mapStateToProps, {})
)(AboutPageContainer)