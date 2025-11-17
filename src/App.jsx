
import './App.css'
import Aboutpage from './landingPage/about/Aboutpage'
import Footer from './landingPage/Footer'
import Homepage from './landingPage/home/Homepage'
import Navbar from './landingPage/Navbar'
import NotFound from './landingPage/NotFound'
import PricingPage from './landingPage/pricing/PricingPage'
import ProductPage from './landingPage/product/ProductPage'
import SignupPage from './landingPage/signup/SignupPage'
import SupportPage from './landingPage/support/SupportPage'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/about' element={<Aboutpage/>}></Route>
      <Route path='/product' element={<ProductPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
