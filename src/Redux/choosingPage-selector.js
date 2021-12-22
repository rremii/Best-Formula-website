import {createSelector} from "reselect";
import {useEffect} from "react";
import {connect} from "react-redux";

export const getTopicAllsSelector = (state) => {

    return state.choosingPage
}
const getTopicsSelector = createSelector(getTopicAllsSelector,
    (AllTopics) => {
    debugger

    })
// let mapStateToProps= (state)=>{
//     language: state.MainVariables.language
//
// }
// export default compose(
//     connect(mapStateToProps,{})
// )(getTopicsSelector)