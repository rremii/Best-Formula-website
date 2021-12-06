import css from "./NavBar.module.sass";


const NavBar = (props) => {


    return <nav className={!props.isNavBar?css.hidden:''}>
        <section className={css.section}></section>
        <div  className={css.links}>
            Math
        </div>
        <div className={css.links}>
            Phisics
        </div>
    </nav>

};
export default NavBar;
