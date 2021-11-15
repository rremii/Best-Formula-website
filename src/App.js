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
import ChoosingPage from "./components/ChoosingPage/ChoosingPage";

function App() {
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
                        <Route path="/math" element={<ChoosingPage/>}/>
                        <Route path="/phisics" element={<ChoosingPage/>}/>
                    </Routes>

                    <Footer/>
                </main>
            </div>
        </div>
    );
}

export default App;
