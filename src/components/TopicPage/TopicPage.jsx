import css from './TopicPage.module.sass'

const TopicPage = (props) => {
    return <div className={css.wrapper}>
        <div className={css.name}>
            <span>name</span>
        </div>
        <div className={css.content}>
            <div>
                <span>formulas</span>
                <span>formulas</span>
                <span>formulas</span>
                <span>formulas</span>

            </div>
            <div>
                description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto commodi
                consequatur dignissimos illum in, natus nisi nostrum officiis quas quidem quod repellendus! Aspernatur
                debitis enim id nam necessitatibus nemo provident quia quos repellendus sequi similique tempore, ut
                voluptatibus. Accusamus accusantium, amet ea expedita id iure magnam quis saepe vel?
            </div>
        </div>
    </div>
}
export default TopicPage