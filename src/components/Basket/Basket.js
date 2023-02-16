import basket from "../../context/basket"
import style from "./Basket.module.css"
import ProductItem from "./ProductItem";
import { useState } from "react";

function Basket() {
    let [arrayBasket, setArrayBasket] = useState(basket)
    return (
        <div className={style["wrapper"]}>
            <div className={style["img-basket"]}></div>
            <div className={style["wrapper-basket"]}>

                {arrayBasket.map(el => <ProductItem arrayBasket={arrayBasket} setArrayBasket={setArrayBasket} key={el.id} id={el.id} name={el.name} price={el.price} path={el.path} />)}

            </div>

            <div className={style["total-quantity"]}>
                <p>Всего: . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                <p className={style["quantity"]}>{arrayBasket.length} товаров</p>
            </div>
            <div className={style["total-count"]}>
                <p>Сумма заказа:  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
                <p className={style["count"]}>{arrayBasket.reduce((sum, el) => sum + el.price, 0)} ₴</p>
            </div>
            <div className={style["btn"]}></div>
        </div>
    )
}

export default Basket