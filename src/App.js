import React from "react";
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


function App(props) {


    return (
        <div className="maincontainer">
            <div className="App">
                <header>
                    <Header/>
                </header>
                <nav>
                    <NavBar/>
                </nav>

                <main>
                    <Routes>
                        <Route path='/' element={<>
                            <MainPage/>
                            <AboutPage/>
                        </>}/>
                        <Route path="/math" element={<ChoosingPageContainer/>}/>
                        <Route path="/phisics" element={<ChoosingPageContainer/>}/>
                        <Route path="/math/:id" element={<TopicPageContainer/>}/>
                        <Route path="/phisics/:id" element={<TopicPageContainer/>}/>
                    </Routes>

                    <Footer/>
                </main>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        state: state.choosingPage
    }
}

export default compose(
    connect(mapStateToProps, {}),
)(App)


