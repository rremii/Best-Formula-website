import Header from "./Header.jsx";
import {compose} from "redux";
import {connect} from "react-redux";
import React from "react";
import {
    toggleNavBar,
    toggleSettings,
} from "../../Redux/MainReduser";
import {getSearchData, setSearchString} from "../../Redux/SearchReducer";


const HeaderContainer = (props) => {

    let searchData = props.searchingData

    if (props.language === 'eng') searchData = props.searchingData.eng
    if (props.language === 'rus') searchData = props.searchingData.rus


        return <Header searchingData={searchData} {...props} />
}
let mapStateToProps = (state) => {
    return {
        isLightMod: state.MainVariables.isLightMod,
        searchingData: state.SearchPage.searchingData,
        searchingString: state.SearchPage.searchString,
        isNavBar: state.MainVariables.isNavBar,
        isSettings: state.MainVariables.isSettings,
        language: state.MainVariables.language,


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