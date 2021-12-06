import Settings from "./Settings";
import {connect} from "react-redux";
import {compose} from "redux";

const SettingsContainer=(props)=>{
    return <Settings {...props} />
}
let mapStateToProps=(state)=>{
    return{
        isSettings: state.MainVariables.isSettings

    }
}
export default compose(
    connect(mapStateToProps,{})
)(SettingsContainer)