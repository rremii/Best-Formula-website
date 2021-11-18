import css from './TopicPage.module.sass'

const TopicPage = (props) => {
    console.log(props)
    return <div className={css.wrapper}>
        <div className={css.name}>
            <span>{props.name}</span>
        </div>
        <div className={css.content}>
            <div>
                {props?.formulas?.map(formula => {
                    return <span>{formula}</span>

                })}


            </div>
            <div>
                {props.discription}
            </div>
        </div>
    </div>
}
export default TopicPage