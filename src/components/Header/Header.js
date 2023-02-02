import style from './Header.module.css'

function Header() {
    return (
        <div className={style['wrapper']}>
            <div className={style['logo-wrapper']}>
                <div className={style['logo']}></div>
                <div className={style['bascet']}></div>
            </div>
            <nav>
                <p>НОВИНКИ</p>
                <p>ПЛАТЬЯ</p>
                <p>ВЕРХ</p>
                <p>НИЗ</p>
                <p>КУРТКИ</p>
                <p>МЕЛОЧИ</p>
                <p>КОСТЮМЫ</p>
                <p>#Boorivagirls</p>
            </nav>

        </div>
    )
}

export default Header