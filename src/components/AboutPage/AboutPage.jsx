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


    return <div ref={ref} onMouseMove={animateBG} onTouchMove={animateBG} className={[css.AboutPage].join(' ')}>

        <div className={css.bg}>
            <div className={css.textPusherLeft}>

            </div>
            <div className={css.textPusherRight}>

            </div>

            <span>

            basically Best Formula was created
            personally for me and my friends but that
            would be cool indeed is
            you
            could find it usefull in your case


                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquid at deserunt eligendi ex illo ipsa itaque labore laborum, necessitatibus neque non porro provident quia rerum saepe sed sequi soluta voluptatem. Architecto, commodi corporis deleniti distinctio eius et explicabo impedit ipsa magnam molestiae necessitatibus qui, quia quisquam quos rem saepe ullam voluptate. A dignissimos distinctio dolore doloribus earum est, ex excepturi impedit, in iste labore molestias natus nesciunt omnis perferendis perspiciatis quaerat quam qui quia quos suscipit tempora ut velit veniam vitae! A animi ducimus expedita in neque nihil obcaecati optio possimus, tempore voluptatibus? Aut ipsa possimus quibusdam quisquam?
            </span>
        </div>
        <section
            style={{
                transform: ` translateX(${intersectionObserverEntry.intersectionRatio >= 0.5 ?
                    -100 * (intersectionObserverEntry.intersectionRatio - (window.innerWidth >= 700 ? 0.49 : 0.40)) : '0'}%)`
            }}
            className={[css.upperText, css.leftText].join(' ')}>

      <span>
           BEST FORMULA
      </span>
        </section>
        <section
            style={{
                transform: ` translateX(${intersectionObserverEntry.intersectionRatio >= 0.5 ?
                    100 * (intersectionObserverEntry.intersectionRatio - (window.innerWidth >= 700 ? 0.49 : 0.40)) : '0'}%)`
            }}
            className={[css.upperText, css.rightText].join(' ')}>
      <span>
           BEST FORMULA
      </span>
        </section>
    </div>
}
export default AboutPage
