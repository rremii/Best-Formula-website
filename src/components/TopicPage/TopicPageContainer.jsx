import TopicPage from "./TopicPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getMathData, getPhisicsData} from "../../Redux/TopicPageReducer";
import {useParams} from "react-router-dom";

const TopicPageContainer = (props) => {
    let id = useParams()
    useEffect(() => {
        if (window.location.pathname.includes('/math')) props.getMathData(id)
        if (window.location.pathname.includes('/phisics')) props.getPhisicsData(id)

    }, [])
    return <TopicPage {...props.TopicPage[0]} />
}
let mapStateToProps = (state) => {
    return {
        TopicPage: state.topicPage.currentTopic
    }
}
export default compose(
    connect(mapStateToProps, {getMathData, getPhisicsData})
)(TopicPageContainer)