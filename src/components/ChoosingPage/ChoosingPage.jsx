import css from './ChoosingPage.module.sass'

const ChoosingPage = (props) => {
    return <div className={css.ChoosingPage}>
        <span>
            <div></div>
            Choose your topic
        </span>
        <div className={css.topics__container}>
            <div>
                <span></span><span></span><span></span><span></span>
                topic one
            </div>
            <div>
                <span></span><span></span><span></span><span></span>
                topic two
            </div>
        </div>
    </div>

}
export default ChoosingPage