import React, {useState} from "react";
import css from "./header__sass/HeaderContainer.module.sass";
import logo from "./../../images/logo.svg";
import gearWheel from "./../../images/gearWheel.svg";
import searchImg from './../../images/search.svg'
import {toggleLightMod} from "../../Redux/MainReduser";
import {NavLink} from "react-router-dom";
import NavBarContainer from "../NavBar/NavBarContainer";
import Settings from "../Settings/Settings";

const Header = ({searchingData, ...props}) => {

    let [isSearchActive, toggleSearch] = useState(false);
    let search = React.useRef()
    const getSearchData = () => {
        props.setSearchString(search.current.value)
        props.getSearchData(props.language)
    }

    const toggleNavBar = () => {
        props.toggleNavBar()
        toggleSearch(false)
    }
    const toggleSettings = () => {
        props.toggleSettings()
        toggleSearch(false)

    }
    return (
        <div  className={[css.header, props.isLightMod ? '' : css.headerDark].join(" ")}>
            {
                isSearchActive && <div onClick={() => toggleSearch(false)} className={css.overlayHeader}/>
            }
            <div onClick={toggleNavBar} className={[css.burger, props.isNavBar ? css.burgerActive : ''].join(" ")}>
                <span/>
                <span/>
                <span/>
            </div>
            <NavLink to='/' className={css.logo}>
                <img src={logo} alt=""/>
            </NavLink>
            <div className={css.different}>
                <div
                    className={
                        [props.searchingString && isSearchActive ? css.searchContainerhasContent : '',
                            isSearchActive ? css.searchContainerActive : css.searchContainer].join(' ')
                    }
                    onClick={() => toggleSearch(true)}
                >

                    <input
                        onChange={getSearchData}
                        ref={search}
                        value={props.searchingString}
                        type="text"
                    />
                    <div>
                        <img src={searchImg} alt=""/>
                    </div>
                    <article className={css.searchingDataContainer}>
                        {searchingData?.map(({id, topic, type, url}) => {
                            return (
                                <NavLink key={topic} to={`${url}/${"" + id}`}>
                                    <span className={type === 'math' || type === 'мат' ? css.typeMath : css.typePhis}>
                                        <p>{type}</p>
                                    </span>
                                    <span className={css.topic}>
                                    {'' + topic}
                                    </span>
                                </NavLink>
                            )
                        })}
                    </article>
                </div>
                <div onClick={toggleSettings}
                     className={[css.gearWheel, props.isSettings ? css.gearWheelActive : ''].join(' ')}>
                    <img src={gearWheel} alt=""/>
                </div>
            </div>


        </div>
    );
};
export default Header;

