import style from './Preview.module.css'

function Preview() {
    return (
        <div className={style['wrapper']}>
            <div className={style['img-womens']}>
                <div className={style['price']}>
                    <p>1 099 ₴</p>
                    <p>1 299 ₴</p>
                    <p>2 499 ₴</p>
                    <p>2 499 ₴</p>
                </div>
            </div>
            <div className={style['caption']}>
                <p>Cвитшот вставка
                    клетка</p>
                <p>Платье прозрачное
                    в цветочек черное</p>
                <p>Бомбер Gone Crazy
                    хаки</p>
                <p>Платье-футболка рыбы
                    в аквариуме</p>
            </div>
            <div className={style['new-coll']}></div>
            <div className={style['store']}></div>

            <div className={style['section-advertising']}>

                <div className={style['section']}>
                    <div className={style['kat']}> </div>
                    <div>
                        <h1>Отправка
                            день в день</h1>
                        <p>При заказе до 18:00</p>

                    </div>
                </div>
                <div className={style['section']}>
                    <div className={style['wings']}> </div>
                    <div>
                        <h1>Легкий
                            возврат/обмен</h1>
                        <p>В течении 14 дней</p>

                    </div>
                </div>
                <div className={style['section']}>
                    <div className={style['heart']}> </div>
                    <div>
                        <h1>Сделано
                            в Украине</h1>
                        <p>Прям в Киеве</p>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Preview