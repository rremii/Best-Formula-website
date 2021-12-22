import css from './AboutePage.module.sass'
import {useIntersectionObserver} from "react-use-observer";
import {useEffect} from "react";

const AboutPage = (props) => {
//////////////////
    const animateBG = (e) => {
        let elements = document?.createElement('div')
        elements?.setAttribute('class', 'element')
        document.querySelector('.AboutePage_bg__Q_7ri')?.appendChild(elements)
        // console.log(e.targetTouches[0].clientY)
        if (e._reactName === "onTouchMove") {
            elements.style.left = e?.targetTouches[0]?.clientX + 'px'
            elements.style.top = e?.targetTouches[0]?.clientY + 'px'
        } else {
            elements.style.left = e?.clientX + 'px'
            elements.style.top = e?.clientY + 'px'
        }
        setTimeout(() => {
            elements.remove()
        }, 2000)
    }
///////////////

    let arr = []
    for (let i = 0.5; i < 1; i = i + 0.01) {
        arr.push(i)
    }

    const [ref, intersectionObserverEntry] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: arr
    })


    return <div ref={ref} onMouseMove={animateBG} onTouchMove={animateBG}
                className={[css.AboutPage, !props.isLightMod ? css.AboutPage_Dark : ''].join(' ')}>

        <div className={css.bg}>
            <div className={css.textPusherLeft}>

            </div>
            <div className={css.textPusherRight}>

            </div>

            {props.language === 'eng' &&
            <span>
            basically BestFormula was created
            personally for me and my friends but that
            would be cool indeed if
            you
            could find it usefull in your case
            </span>
            }
            {props.language === 'rus' &&
            <span>
            Вообще, BestFormula была создана для
            меня и моих друзей, но было бы круто
            если она будит полезной для тебя тоже
            </span>
            }
        </div>
        <section
            style={{
                transform: ` translateX(${intersectionObserverEntry.intersectionRatio >= (window.innerWidth >= 700 ? 0.6 : 0.5) ?
                    -100 * (intersectionObserverEntry.intersectionRatio - (window.innerWidth >= 700 ? 0.59 : 0.4)) : '0'}%)`
            }}
            className={[css.upperText, css.leftText].join(' ')}>

      <span>
           BEST FORMULA
      </span>
        </section>
        <section
            style={{
                transform: ` translateX(${intersectionObserverEntry.intersectionRatio >= (window.innerWidth >= 700 ? 0.6 : 0.5) ?
                    100 * (intersectionObserverEntry.intersectionRatio - (window.innerWidth >= 700 ? 0.59 : 0.4)) : '0'}%)`
            }}
            className={[css.upperText, css.rightText].join(' ')}>
      <span>
           BEST FORMULA
      </span>
        </section>
    </div>
}
export default AboutPage
