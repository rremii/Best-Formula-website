import React, {useState} from "react";
import css from "./HeaderContainer.module.sass";
import logo from "./../../images/logo.svg";
import gearWheel from "./../../images/gearWheel.svg";
import searchImg from './../../images/search.svg'
import {toggleLightMod} from "../../Redux/MainReduser";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let [isSearchActive, toggleSearch] = useState(false);
    //   const toggle = () => {
    // //     toggleSearch(!isSearchActive);
    // //     // if (isSearchActive) toggleSearch(null)
    // //     // else toggleSearch(true)
    // //   };

    //   {
    //     alert("qwe");
    //   }
    let search = React.useRef()
    const getSearchData = () => {
        console.log(search.current.value)
        props.setSearchString(search.current.value)
        props.getSearchData()
    }
    return (
        <div className={[css.header].join(" ")}>
            {
                isSearchActive && <div onClick={() => toggleSearch(false)} className={css.overlay}/>
            }
            <div className={css.burger}>
                <span/>
                <span/>
                <span/>
            </div>
            <div className={css.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={css.different}>
                <div
                    className={
                        [props.searchingString && isSearchActive? css.searchContainerhasContent : '',
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
                        {props?.searchingData.map(({id, topic, type}) => {
                            return (
                                <NavLink key={topic} to={`${type}/${"" + id}`}>
                                    <span className={type === 'math' ? css.typeMath : css.typePhis}>
                                        <p>{type === 'math' ? 'math' : 'phis'}</p>
                                    </span>
                                    <span className={css.topic}>
                                    {'' + topic}
                                    </span>
                                </NavLink>
                            )
                        })}
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

// const Header = () => {
//     let [isSearchActive, toggleSearch] = useState(false)
//     window.active = isSearchActive
//     // let search = React.useRef()
//     // const getSearchData = () => {
//     //     console.log(search.current.value)
//     //     props.setSearchString(search.current.value)
//     //     props.getSearchData()
//     // }
//     console.log(isSearchActive ? 'ewqe' : 'no')
//     const toggle = () => {
//         if (isSearchActive) toggleSearch(false)
//         else toggleSearch(true)
//     }
//     return <div className={[css.header].join(' ')}>
//         {/*<section onClick={() => toggleSearch(false)} className={css.overlay}></section>*/}
//         <div className={css.burger}>
//             <span/>
//             <span/>
//             <span/>
//         </div>
//         <div className={css.logo}>
//             <img src={logo} alt=""/>
//         </div>
//         <div className={css.different}>
//
//             <div onClick={toggle}
//                  className={[css.searchContainer, isSearchActive ? css.searchContainer_active : ''].join(' ')}>
//                 {/*<input onChange={getSearchData} ref={search} value={props.searchingString} type="text"/>*/}
//                 {/*<div>*/}
//                 {/*    <img src={searchImg} alt=""/>*/}
//                 {/*</div>*/}
//                 {/*<article className={css.searchingDataContainer}>*/}
//                 {/*    {*/}
//                 {/*        props.searchingData.map(({id, topic, type}) => {*/}
//                 {/*            return <NavLink key={topic} to={`${type}/${'' + id}`}>*/}
//                 {/*                {topic}-{type}*/}
//                 {/*            </NavLink>*/}
//                 {/*        })*/}
//                 {/*    }*/}
//                 {/*</article>*/}
//
//             </div>
//             <div className={css.gearWheel}>
//                 <img src={gearWheel} alt=""/>
//             </div>
//         </div>
//
//     </div>
//
// }
// export default Header
