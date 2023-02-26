import Basket from "../../components/Basket/Basket"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import basket from "../../context/basket"

function BasketPage() {
    return (
        <>
            <Header></Header>
            <Basket></Basket>
            <Footer></Footer>
        </>
    )
}
export default BasketPage