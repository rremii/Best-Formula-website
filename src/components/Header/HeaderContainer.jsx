import Header from "./Header.jsx";
import {compose} from "redux";
import {connect} from "react-redux";
import React from "react";
import {
    toggleLightMod,
    toggleNavBar,
    togglePreroll,
    togglePrerollToNight,
    toggleSettings,
    url
} from "../../Redux/MainReduser";
import nightMod from "../Common/Hoc/nightMod";
import {getSearchData, setSearchString} from "../../Redux/SearchReducer";
import {getTopicAllsSelector} from "../../Redux/choosingPage-selector";





const HeaderContainer = (props) => {
    return <Header {...props} />
}
let mapStateToProps = (state) => {
    return {
        // isLightMod: state.MainVariables.isLightMod
        // isPrerollNight: state.MainVariables.isPrerollNight,
        searchingData: state.SearchPage.searchingData,
        searchingString: state.SearchPage.searchString,
        // url: state.MainVariables.url
        isNavBar: state.MainVariables.isNavBar,
        isSettings: state.MainVariables.isSettings

    }
}
export default compose(
    connect(mapStateToProps, {
        toggleNavBar,
        getSearchData,
        setSearchString,
        toggleSettings
    })
    // nightMod
)(HeaderContainer)