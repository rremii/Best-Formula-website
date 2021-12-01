import React from "react";

import "./App.sass";

import {
  BrowserRouter,
  Routes,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import ChoosingPageContainer from "./components/ChoosingPage/ChoosingPageContainer";
import TopicPageContainer from "./components/TopicPage/TopicPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";

import FooterContainer from "./components/Footer/FooterContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import AboutPageContainer from "./components/AboutPage/AboutPageContainer";
import HeaderContainerRRR from "./components/HeaderRRR/HeaderContainer";
import HeaderRRR from "./components/HeaderRRR/Header";
import Header from "./components/Header/Header";

function App(props) {
  // let [isPreroll, togglePreroll] = useState(false)
  // useEffect(()=>{
  //     togglePreroll(true)
  //     setTimeout(()=>togglePreroll(false),700)
  // },[props.isLightMod])
  return (
    <div className="App">
      <>
        <HeaderContainer />
      </>

      <main>
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
