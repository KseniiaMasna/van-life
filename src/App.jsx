import './App.css'
import "./server"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostedVans from './pages/Host/HostedVans'
import HostLayout from './components/Host/HostLayout'
import HostedVan from './pages/Host/HostedVan/HostedVan'
import VanPricing from './pages/Host/HostedVan/VanPricing'
import VanInfo from './pages/Host/HostedVan/VanInfo'
import VanPhotos from './pages/Host/HostedVan/VanPhotos'
import NotFound from './pages/NotFound'
import AuthRequired from './components/AuthRequired'
import Login from './pages/Login'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index  element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='login' element={<Login />}/>
            <Route path='vans' element={<Vans />}/>
            <Route path='vans/:id' element={<VanDetail />}/>


            <Route element={<AuthRequired />}>

              <Route path='host' element={<HostLayout />}> 
                <Route index element={<Dashboard />}/>
                <Route path='income' element={<Income />}/>
                <Route path='reviews' element={<Reviews />}/>
                <Route path='vans' element={<HostedVans />}/>
                <Route path='vans/:id' element={<HostedVan />}>
                  <Route index element={<VanInfo />}/>
                  <Route path='pricing' element={<VanPricing />}/>
                  <Route path='photos' element={<VanPhotos />}/>
                </Route>              
              </Route> 

            </Route>


            <Route path='*' element={<NotFound />}/>                           
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
