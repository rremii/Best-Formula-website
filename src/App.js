import logo from './logo.svg';
import './App.sass';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";

function App() {
    return (
        <div className='maincontainer'>
            <div className="App">
                <header>
                    <Header/>
                </header>
                <nav>
                    <NavBar/>
                </nav>
                <main>
                    <MainPage/>
                    <div>
                        qwqweqweeeeqqqqqqqqqqq
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
