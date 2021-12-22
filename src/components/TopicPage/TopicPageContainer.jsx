import TopicPage from "./TopicPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getMathData, getPhisicsData} from "../../Redux/TopicPageReducer";
import {useParams} from "react-router-dom";
import {url} from "../../Redux/MainReduser";
import withRoute from "../Common/Hoc/withRoute";

const TopicPageContainer = (props) => {
    let id = useParams()
    useEffect(() => {
        if (window.location.pathname.includes('/math')) props.getMathData(id)
        if (window.location.pathname.includes('/phisics')) props.getPhisicsData(id)

    }, [window.location.pathname])


    let data = props?.TopicPage[0]
    debugger

    if (props.language === 'eng') {
      data = {id,name: data?.eng.name,formulas: data?.eng.formulas,discription: data?.eng.discription }
    }
    if (props.language === 'rus') {
        data = {id,name: data?.rus.name,formulas: data?.rus.formulas,discription: data?.rus.discription }
    }

    return <TopicPage isLightMod={props.isLightMod} {...data} />
}
let mapStateToProps = (state) => {
    return {
        isLightMod: state.MainVariables.isLightMod,
        TopicPage: state.topicPage.currentTopic,
        language: state.MainVariables.language,

    }
}
export default compose(
    connect(mapStateToProps, {getMathData, getPhisicsData}),
    withRoute
)(TopicPageContainer)