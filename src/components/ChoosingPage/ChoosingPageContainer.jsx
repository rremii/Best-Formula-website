import ChoosingPage from "./ChoosingPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {getTopicAllsSelector, getTopicsSelector} from "../../Redux/choosingPage-selector";
import withRoute from "../Common/Hoc/withRoute";

const ChoosingPageContainer = (props) => {
    let data
    if(window.location.pathname ==='/phisics') data = props?.choosingPage?.phisicTopics
    if(window.location.pathname ==='/math') data = props?.choosingPage?.mathTopics



    return <ChoosingPage choosingPage={data}/>


}
let mapStateToProps = (state) => {
    return {
        choosingPage: getTopicAllsSelector(state)
    }

}
export default compose(
    connect(mapStateToProps, {}),
    withRoute
)(ChoosingPageContainer)