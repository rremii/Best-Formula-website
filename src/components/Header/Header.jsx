import css from "./Header.module.sass";
import React from "react";
import logo from './../../images/logo.svg'
import gearWheel from './../../images/gearWheel.svg'
import searchImg from './../../images/search.svg'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    let search = React.useRef()
    const getSearchData = () => {
        debugger
        console.log(search.current.value)
        props.setSearchString(search.current.value)
        props.getSearchData()
    }

    return (
        <div className={[css.header, props.isLightMod ? css.header_night : ""].join(' ')}>
            <div className={css.burger}>
                <span/>
                <span/>
                <span/>
            </div>
            <div className={css.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={css.different}>
                <div className={css.searchContainer}>

                    <input onChange={getSearchData} ref={search} value={props.searchingString} type="text"/>
                    <div>

                        <img src={searchImg} alt=""/>
                    </div>
                    <article className={css.searchingDataContainer}>
                        {
                            props.searchingData.map(({id, topic, type}) => {
                                return <NavLink key={topic} to={`${type}/${'' + id}`}>
                                    {topic}-{type}
                                </NavLink>
                            })
                        }
                    </article>
                </div>
                <div className={css.gearWheel}>
                    <img src={gearWheel} alt=""/>
                </div>
            </div>
        </div>
    );
};
export default Header;
