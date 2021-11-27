import css from "./Header.module.sass";
import React from "react";
import logo from './../../images/logo.svg'
import gearWheel from './../../images/gearWheel.svg'
import search from './../../images/search.svg'

const Header = (props) => {
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
                    <input type="text"/>
                    <img src={search} alt=""/>
                </div>
                <div className={css.gearWheel}>
                    <img src={gearWheel} alt=""/>
                </div>
            </div>
        </div>
    );
};
export default Header;
