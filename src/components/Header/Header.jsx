import css from './Header.module.sass'
import gearWheel from './../../images/white-gear-icon-png-13.jpg'
const Header = (props) => {
    return (<div className={css.header}>
        <div>B F</div>
        <div>
            <img src={gearWheel} alt=""/>
        </div>
    </div>)
}
export default Header