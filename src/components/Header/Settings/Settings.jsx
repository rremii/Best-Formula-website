import css from './Settings.module.sass'

const Settings = (props) => {
    return <div className={props.isSettings ? css.settings : css.hidden}>
        <span>Theme</span>
        <div className={css.container}>
            <div>
            </div>
            <div>
            </div>
        </div>
        <span>Language</span>
        <div className={css.container}>
            <div></div>
            <div></div>
        </div>
    </div>
}
export default Settings