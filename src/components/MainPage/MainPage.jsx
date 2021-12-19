import css from './MainPage.module.sass'
import arhimed from './../../images/arhimed.png'
import clouds1 from './../../images/Clouds1.png'
import arrow from './../../images/arrow.svg'
import {useState} from "react";
import React from "react";

const MainPage = () => {

    const scrollBy=(e)=>{


    }

    return (<div className={[css.MainPage].join(' ')}>
        <div className={css.contentContainer}>
            <section className={css.content}>
                <h1>
                    <span>
                        Best
                    </span>
                    <span>
                        Formulas
                    </span>
                </h1>
                <h2>
                    Find any formula you’ve ever needed in the searching bar above
                </h2>
            </section>

        </div>
        <div className={css.imgContainer}>
            <img src={arhimed} alt=""/>
        </div>
        <img className={[css.backGround].join(' ')} src={clouds1}
             alt=""/>
        <div onClick={scrollBy} className={[css.arrow].join(' ')}>
            <img src={arrow} alt=""/>
        </div>
    </div>)
}
export default MainPage
