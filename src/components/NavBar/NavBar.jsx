import css from "./NavBar.module.sass";
import {useState} from "react";
import {NavLink, Link} from "react-router-dom";

const NavBar = (props) => {
    let [isActive, toggleActive] = useState(false);

    const navBar = () => {
        if (isActive) toggleActive(false);
        else toggleActive(true);
    };

    return (
        <div
            className={[css.NavBar, isActive ? css.active__navBar : '',
                props.isLightMod && !isActive  ? css.NavBar_Night : '',
                props.isLightMod && isActive  ? css.NavBar_Night_Active : ''].join(" ")}>
            <div onClick={navBar}>
                <span> </span>
                <span> </span>
                <span> </span>
            </div>
            {isActive ? (
                <>
                    <div className={css.math_phisics_open}>
                        <NavLink
                            className={({isActive}) => isActive ? css.active__Links_open : ''}
                            to="/math"
                        >
                            <span>

                            math
                            </span>
                        </NavLink>
                    </div>

                    <div className={css.math_phisics_open}>
                        <NavLink
                            className={({isActive}) => isActive ? css.active__Links_open : ''}
                            to="/phisics"
                        >
                           <span>
                               phisics
                           </span>
                        </NavLink>
                    </div>
                </>
            ) : (
                <>
                    <div className={css.math_phisics}>
                        <NavLink
                            className={({isActive}) => isActive ? css.active__Links : ''}
                            to="/math"
                        >
                            <span>

                            e<sup>i𝝅</sup>= -1
                            </span>
                        </NavLink>
                    </div>

                    <div className={css.math_phisics}>
                        <NavLink
                            className={({isActive}) => isActive ? css.active__Links : ''}
                            to="/phisics"
                        >
                            <span>

                            E=mc<sup>2</sup>
                            </span>
                        </NavLink>
                    </div>
                </>
            )}
        </div>
    );
};
export default NavBar;
