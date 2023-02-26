import {basket} from '../../context/basket'
import style from './Basket.module.css'

function CountProducts() {

    return (
        <p className={style['quantity']}>{basket.length}</p>
    );
};

export default CountProducts;