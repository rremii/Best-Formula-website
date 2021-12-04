import css from "./NavBar.module.sass";


const NavBar = (props) => {


    return <nav className={!props.isNavBar?css.hidden:''}>
        <div  className={css.links}>
            Math
        </div>
        <div className={css.links}>
            Phisics
        </div>
    </nav>

};
export default NavBar;
