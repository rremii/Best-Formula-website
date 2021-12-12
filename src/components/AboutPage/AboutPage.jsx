import css from './AboutePage.module.sass'
import {useIntersectionObserver} from "react-use-observer";
import {useEffect} from "react";

const AboutPage = (props) => {
//////////////////
    const animateBG = (e) => {
        let elements = document.createElement('div')
        elements.setAttribute('class', 'element')
        document.querySelector('.AboutePage_bg__Q_7ri').appendChild(elements)
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

    console.log(intersectionObserverEntry)
    // console.log(arr)


    return <div ref={ref} onMouseMove={animateBG} onTouchMove={animateBG} className={[css.AboutPage].join(' ')}>
        <div className={css.bg}>
            <div className={css.top__container}>
                <div>
                    basically Best Formula was created personally for me and my friends but that would be cool indeed is
                    you
                    could find it usefull in your case
                </div>
            </div>
            <div className={css.bottom__container}>
                <div>
                    here you can find all the nessasary formulas for math and phisics without any water. i know myself
                    how
                    complicated it can be to quicly find nessasary stuff.now bileave me you'll never have such a problem
                    any
                    more!
                </div>
            </div>
        </div>
        <section
            style={{transform: ` translateX(${intersectionObserverEntry.intersectionRatio >= 0.6 ? -100 * (intersectionObserverEntry.intersectionRatio - 0.59): '0' }%)`}}
            className={[css.upperText, css.leftText].join(' ')}>

      <span>
           BEST FORMULA
      </span>
        </section>
        <section
            style={{transform: ` translateX(${intersectionObserverEntry.intersectionRatio >= 0.6 ? 100 * (intersectionObserverEntry.intersectionRatio - 0.59): '0' }%)`}}
            className={[css.upperText, css.rightText].join(' ')}>
      <span>
           BEST FORMULA
      </span>
        </section>
    </div>
}
export default AboutPage
