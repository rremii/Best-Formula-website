import Settings from "./Settings";
import {connect} from "react-redux";
import {compose} from "redux";
import {toggleLanguage, toggleLightMod, togglePreroll, toggleSettings} from "../../Redux/MainReduser";

const SettingsContainer = (props) => {
    return <Settings {...props} />
}
let mapStateToProps = (state) => {
    return {
        isSettings: state.MainVariables.isSettings,
        isLightMod: state.MainVariables.isLightMod,
        language: state.MainVariables.language,


    }
}
export default compose(
    connect(mapStateToProps, {toggleLightMod,togglePreroll,toggleSettings,toggleLanguage})
)(SettingsContainer)