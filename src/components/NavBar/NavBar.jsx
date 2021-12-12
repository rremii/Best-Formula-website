import css from "./NavBar.module.sass";
import {NavLink} from "react-router-dom";


const NavBar = (props) => {

    const toggleNavBar = () => {
        props.toggleNavBar()
    }

    return <>
        {
            props.isNavBar &&
            <section onClick={toggleNavBar} className={css.overlay}></section>
        }
        <nav className={!props.isNavBar ? css.hidden : ''}>
            <NavLink to='math' className={css.links}>
                Math
            </NavLink>
            <NavLink to='phisics' className={css.links}>
                Phisics
            </NavLink>
        </nav>
    </>


};
export default NavBar;
