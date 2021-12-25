import React, { useState } from "react";
import "./App.sass";
import {
  BrowserRouter,
  Routes,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ChoosingPageContainer from "./components/ChoosingPage/ChoosingPageContainer";
import TopicPageContainer from "./components/TopicPage/TopicPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import FooterContainer from "./components/Footer/FooterContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import AboutPageContainer from "./components/AboutPage/AboutPageContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import PrerollContainer from "./components/Common/Preroll/PrerollContainer";
function App(props) {
  let [scrollHeight, setScrollHeight] = useState(0);

  const setHeight = (e) => {
    let totalHeight = e.target.scrollHeight - e.target.clientHeight;
    let scroll = e.target.scrollTop;
    let totalScroll = (scroll / totalHeight) * 100;
    setScrollHeight(totalScroll);
  };


  return (
      <div onScroll={setHeight} className="App">
        <PrerollContainer />
        <>
          <HeaderContainer />
        </>
        <NavBarContainer />
        <SettingsContainer />

        <main>
          <div
            style={{ height: `${scrollHeight}%` }}
            className="scrollBar"
          ></div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainPageContainer />
                  <AboutPageContainer />
                </>
              }
            />
            <Route path="/math" element={<ChoosingPageContainer />} />
            <Route path="/phisics" element={<ChoosingPageContainer />} />
            <Route path="/math/:id" element={<TopicPageContainer />} />
            <Route path="/phisics/:id" element={<TopicPageContainer />} />
          </Routes>

          <FooterContainer />
        </main>
      </div>
  );
}

export default App;
// let mapStateToProps = (state) => {
//     return {
//         // state: state.choosingPage,
//         // isLightMod: state.MainVariables.isLightMod
//
//     }
// }
//
// export default compose(
//     connect(mapStateToProps, {}),
// )(App)
