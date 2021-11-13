import css from './Footer.module.sass'

const Footer = () => {
    return <div className={css.footer}>
        <span>© Copyright by Artem Romanov.</span>
        <div>
            <div><img
                src="https://cdn-icons.flaticon.com/png/512/739/premium/739260.png?token=exp=1636822504~hmac=537ef54d76cfe74ce8ec61f36a9ecde5"
                alt=""/></div>
            <div><img src="https://cdn-icons-png.flaticon.com/512/160/160200.png" alt=""/></div>
            <div><img src="https://cdn-icons-png.flaticon.com/512/1051/1051359.png" alt=""/></div>
            <div><img
                src="https://cdn-icons.flaticon.com/png/512/739/premium/739244.png?token=exp=1636822632~hmac=0a72935634440d806760a9657bd05041"
                alt=""/></div>
        </div>
    </div>
}
export default Footer