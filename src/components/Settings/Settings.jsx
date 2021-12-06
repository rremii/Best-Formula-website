import css from './Settings.module.sass'

const Settings = (props) => {
    return <section className={[css.settings,props.isSettings ? '' : css.hidden].join(' ')}>
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
    </section>
}
export default Settings