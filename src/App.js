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

function App() {
  return (
    <div className="maincontainer">
      <div className="App">
        <header>
          <Header />
        </header>
        <nav>
          <NavBar />
        </nav>
        {/* <Routes>
          <Route path="/math" element={<div>qqqqqqqqqqqqqqqqqqqqqqq</div>} />
          <Route path="/phisics" element={<div>qqwwwwwwwwwwwwqqqq</div>} />
        </Routes> */}

        <main>
          <MainPage />
          <div>qwqweqweeeeqqqqqqqqqqq</div>
        </main>
      </div>
    </div>
  );
}

export default App;
