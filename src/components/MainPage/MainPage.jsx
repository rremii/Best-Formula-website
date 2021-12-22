import css from './MainPage.module.sass'
import arhimed from './../../images/arhimed.png'
import clouds1 from './../../images/Clouds1.png'
import arrow from './../../images/arrow.svg'
import cloudsDark from './../../images/cloudsDark.png'

import {useState} from "react";
import React from "react";

const MainPage = (props) => {
    const scrollBy = (e) => {
        window.scrollBy(0, 100)

    }

    return (<div className={[css.MainPage, !props.isLightMod ? css.MainPage_light : ''].join(' ')}>
        <div className={css.contentContainer}>
            {props.language === 'eng' &&
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
            }
            {props.language === 'rus' &&
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
                    Найди любую формулу которая тебе нужна в поиске вверху:D
                </h2>
            </section>
            }
        </div>
        <div className={css.imgContainer}>
            <img src={arhimed} alt=""/>
        </div>
        <img className={[css.backGround].join(' ')} src={props.isLightMod ? clouds1 : cloudsDark}
             alt=""/>
        <div onClick={scrollBy} className={[css.arrow].join(' ')}>
            <img src={arrow} alt=""/>
        </div>
    </div>)
}
export default MainPage
