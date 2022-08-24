import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Components/cartpage/CartPage";
import Footer from "./Components/footer/Footer";
import Home from "./Components/Homepage/Home";
import ItemsInfo from "./Components/itemsInfo/ItemsInfo";
import Navbar from "./Components/navbar/Navbar";
import Products from "./Components/products/Products";
import {store} from './Redux/store'

function App() {
  return (
  <>
  <Provider store={store}>
    <Navbar />
    <Box minHeight='calc(100vh - 64px - 169px)' >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ItemsInfo />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/Products" element={<Products />} />
    </Routes>
    </Box>
    <Footer />
  </Provider>
  </>
  );
}

export default App;
