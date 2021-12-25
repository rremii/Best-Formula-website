import css from './Settings.module.sass'
import russianFlag from './../../images/russianFlag.svg'
import USAflag from './../../images/USAflag.svg'
import DarkModeIcon from './../../images/DarkModeIcon.png'
import LightModeIcon from './../../images/LightModeIcon.svg'


const Settings = (props) => {

    const toggleLightMod = (mode) => {
        props.togglePreroll(true)
        props.toggleSettings()
        setTimeout(() => {
            props.togglePreroll(false)
        }, 1500)
        setTimeout(() => {
            props.toggleLightMod(mode)

        }, 1270)
    }
    const toggleLanguage = (language) => {
        props.toggleLanguage(language)
        props.toggleSettings()
    }

    return <section className={[css.settings,
        props.isSettings ? '' : css.hidden,
        props.isLightMod ? '' : css.Dark].join(' ')}>
        <span>Theme</span>
        <div className={css.container}>
            <div
                className={[!props.isLightMod ? css.disable : '', props.isLightMod ? css.offLigthMode : css.onLigthMode].join(' ')}
                onClick={() => toggleLightMod(false)}>
                <img src={DarkModeIcon} alt=""/>
            </div>
            <div
                className={[props.isLightMod ? css.disable : '', props.isLightMod ? css.onLigthMode : css.offLigthMode].join(' ')}
                onClick={() => toggleLightMod(true)}>
                <img src={LightModeIcon} alt=""/>
            </div>
        </div>
        <span>Language</span>
        <div className={css.container}>
            <div
                className={[props.language === 'rus' ? css.disable : '', props.language === 'rus' ? css.onLanguageMode : css.offLanguageMode].join(' ')}
                onClick={() => toggleLanguage('rus')}><img src={russianFlag} alt=""/></div>
            <div
                className={[props.language === 'eng' ? css.disable : '', props.language === 'eng' ? css.onLanguageMode : css.offLanguageMode].join(' ')}
                onClick={() => toggleLanguage('eng')}><img src={USAflag} alt=""/></div>
        </div>
    </section>
}
export default Settings