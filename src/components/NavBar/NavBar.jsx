import css from "./NavBar.module.sass";
import {NavLink} from "react-router-dom";


const NavBar = (props) => {

    const toggleNavBar = () => {
        props.toggleNavBar()
    }

    return <>
        {
            props.isNavBar &&
            <span onClick={toggleNavBar} className={css.overlay}></span>
        }
        <nav className={[!props.isNavBar ? css.hidden : '', props.isLightMod ? '' : css.dark].join(' ')}>
            {props.language === 'eng' &&
                <>
                    <NavLink to='math' className={css.links}>
                        <span>Math</span>
                    </NavLink>
                    <NavLink to='phisics' className={css.links}>
                        <span>Phisics</span>
                    </NavLink>
                </>}

            {props.language === 'rus' &&
            <>
                <NavLink to='math' className={css.links}>
                    <span>Математика</span>
                </NavLink>
                <NavLink to='phisics' className={css.links}>
                    <span>Физика</span>
                </NavLink>
            </>}
        </nav>
    </>


};
export default NavBar;
