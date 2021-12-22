import css from './Settings.module.sass'
import {toggleSettings} from "../../Redux/MainReduser";

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
    }

    return <section className={[css.settings,
        props.isSettings ? '' : css.hidden,
        props.isLightMod ? '' : css.Dark].join(' ')}>
        <span>Theme</span>
        <div className={css.container}>
            <div className={!props.isLightMod ? css.disable : ''} onClick={() => toggleLightMod(false)}>
            </div>
            <div className={props.isLightMod ? css.disable : ''} onClick={() => toggleLightMod(true)}>
            </div>
        </div>
        <span>Language</span>
        <div className={css.container}>
            <div onClick={() => toggleLanguage('rus')}/>
            <div onClick={() => toggleLanguage('eng')}/>
        </div>
    </section>
}
export default Settings