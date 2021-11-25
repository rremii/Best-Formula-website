import css from './AboutePage.module.sass'

const AboutPage = (props) => {
    return <div className={[css.wrapper, props.isLightMod ? css.wrapper_night : ''].join(' ')}>
        <div className={css.top__container}>
            <div>
                basically Best Formula was created personally for me and my friends but that would be cool indeed is you
                could find it usefull in your case
            </div>
        </div>
        <div className={css.bottom__container}>
            <div>
                here you can find all the nessasary formulas for math and phisics without any water. i know myself how
                complicated it can be to quicly find nessasary stuff.now bileave me you'll never have such a problem any
                more!
            </div>
        </div>
    </div>
}
export default AboutPage
