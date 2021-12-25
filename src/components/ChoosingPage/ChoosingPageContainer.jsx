import ChoosingPage from "./ChoosingPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {getTopicAllsSelector, getTopicsSelector} from "../../Redux/choosingPage-selector";
import withRoute from "../Common/Hoc/withRoute";

const ChoosingPageContainer = (props) => {
    let data
    if (window.location.pathname === '/phisics') data = props?.choosingPage?.phisicTopics
    if (window.location.pathname === '/math') data = props?.choosingPage?.mathTopics

    if (props.language === 'eng') {

        data = data = data.map(({id, topic}) => {
            return {id, topic: `${topic.eng}`}
        })
    }
    if (props.language === 'rus') {
        data = data.map(({id, topic}) => {
            return {id, topic: `${topic.rus}`}
        })
    }

    return <ChoosingPage {...props} choosingPage={data}/>


}
let mapStateToProps = (state) => {
    return {
        choosingPage: getTopicAllsSelector(state),
        isLightMod: state.MainVariables.isLightMod,
        language: state.MainVariables.language,

    }

}
export default compose(
    connect(mapStateToProps, {}),
    withRoute
)(ChoosingPageContainer)