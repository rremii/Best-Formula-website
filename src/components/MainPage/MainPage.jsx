import css from './MainPage.module.sass'

const MainPage = (props) => {
    return (<div className={[css.MainPage, props.isLightMod ? css.MainPage_night : ''].join(' ')}>
        <div>

            <div>Glad to see you <br/> here on <br/> Best Formula <br/> website</div>
        </div>
    </div>)
}
export default MainPage
