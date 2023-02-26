import{basket} from '../../context/basket'
import style from './Basket.module.css'

function SumProducts() {

    function sumElements() {
        let result = basket.reduce((sum, el) => {
            return sum + el.price
        }, 0)
        return result
    }

    return (
        <p className={style['count']}>{sumElements()}</p>
    );
};

export default SumProducts;