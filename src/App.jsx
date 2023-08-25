import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Homepage from './pages/Homepage/Homepage'
import ContactUs from './pages/ContactUs/ContactUs'
import ProductDetails from './pages/ProductDetail/ProductDetails'
import Checkout from './pages/Checkout/Checkout'
import CartContextProvider from './context/CartContext'

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/details/:productid' element={<ProductDetails />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>

        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
