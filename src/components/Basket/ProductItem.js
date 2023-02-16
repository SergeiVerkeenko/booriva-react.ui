import style from "./Basket.module.css"
import basket from "../../context/basket"

function ProductItem({ id, name, price, path, setArrayBasket, arrayBasket }) {

    function deleteFromBasket() {
        const filtered = arrayBasket.filter(el => id !== el.id)
        setArrayBasket(filtered)
    }
    return (
        <>
            <div className={style["product"]}>
                <div className={style['block-info']}>
                    <img alt={name} className={style['product-img']} src={require(`../../storage/assets/${path}`)}></img>

                    <div className={style["product-info"]}>
                        <h2>{name}</h2>
                        <p className={style["price"]}>{price}</p>
                    </div>
                </div>
                <div onClick={deleteFromBasket} className={style["product-delete"]}>

                </div>
            </div>
        </>
    )
}

export default ProductItem