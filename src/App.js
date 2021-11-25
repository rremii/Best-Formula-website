import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.sass";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import {
    BrowserRouter,
    Routes,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import TopicPage from "./components/TopicPage/TopicPage";
import {compose} from "redux";
import {connect} from "react-redux";
import ChoosingPageContainer from "./components/ChoosingPage/ChoosingPageContainer";
import TopicPageContainer from "./components/TopicPage/TopicPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import Preroll from "./components/Common/Preroll/Preroll";
import PrerollContainer from "./components/Common/Preroll/PrerollContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import AboutPageContainer from "./components/AboutPage/AboutPageContainer";
import withRoute from "./components/Common/Hoc/withRoute";


function App(props) {
    let [isPreroll, togglePreroll] = useState(false)
    useEffect(()=>{
        togglePreroll(true)
        setTimeout(()=>togglePreroll(false),700)
    },[props.isLightMod])

    return (
        <div className="maincontainer">
            <div className="App">
                 <PrerollContainer/>


                <header>
                    <HeaderContainer/>
                </header>
                <nav>
                    <NavBarContainer/>
                </nav>

                <main>
                    <Routes>
                        <Route path='/' element={<>
                            <MainPageContainer/>
                            <AboutPageContainer/>
                        </>}/>
                        <Route path="/math" element={<ChoosingPageContainer/>}/>
                        <Route path="/phisics" element={<ChoosingPageContainer/>}/>
                        <Route path="/math/:id" element={<TopicPageContainer/>}/>
                        <Route path="/phisics/:id" element={<TopicPageContainer/>}/>
                    </Routes>

                    <FooterContainer/>
                </main>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        state: state.choosingPage,
        isLightMod: state.MainVariables.isLightMod

    }
}

export default compose(
    connect(mapStateToProps, {}),
)(App)


