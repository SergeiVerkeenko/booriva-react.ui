import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<PreviewPage />}></Route >
      <Route path='products' element={<ProductsPage />}></Route>
      <Route path='basket' element={<BasketPage />}></Route>
      <Route path='payment' element={<PaymentPage />}></Route>
    </Routes >
  );
}

export default App;
