import style from './Preview.module.css'
import PreviewItem from './PreviewItem'

function Preview() {
    const advantages = [{
        id: 1,
        image: 'image-1',
        logo: 'Отправка день в день',
        paragraph: 'При заказе до 18:00'
    },
    {
        id: 2,
        image: 'image-2',
        logo: 'Легкий возврат/обмен',
        paragraph: 'В течении 14 дней'
    },
    {
        id: 3,
        image: 'image-3',
        logo: 'Сделано в Украине',
        paragraph: 'Прям в Киеве'
    }]

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

            <div className={style['advertages']}>

                {advantages.map((el) => <PreviewItem key={el.id6} image={el.image} paragraph={el.paragraph} logo={el.logo} />)}

            </div>
        </div>
    )

}

export default Preview