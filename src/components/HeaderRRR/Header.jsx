import React, { useState } from "react";
import css from "./Header.module.sass";
import logo from "./../../images/logo.svg";
import gearWheel from "./../../images/gearWheel.svg";
import { toggleLightMod } from "../../Redux/MainReduser";

const HeaderRRR = (props) => {
  let [isSearchActive, toggleSearch] = useState(true);
  const toggle = () => {
    toggleSearch(!isSearchActive);
    // if (isSearchActive) toggleSearch(null)
    // else toggleSearch(true)
  };
  {
    alert("qwe");
  }
  return (
    <div className={[css.header].join(" ")}>
      {/*{alert('qwe')}*/}
      <div className={css.burger}>
        <span />
        <span />
        <span />
      </div>
      <div className={css.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={css.different}>
        <div
          className={
            isSearchActive ? css.searchContainerActive : css.searchContainer
          }
          onClick={() => toggleSearch(!isSearchActive)}
        ></div>
        <div className={css.gearWheel}>
          <img src={gearWheel} alt="" />
        </div>
      </div>
    </div>
  );
};
export default HeaderRRR;

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
