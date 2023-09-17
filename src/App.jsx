import './App.css';
import Home from './pages/home/home';
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Login from './pages/login/Login';

// Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ModelA from './components/ModelA';
import ModelB from './components/ModelB';
import ModelC from './components/ModelC';
import ModelD from './components/ModelD';
import ModelE from './components/ModelE';
import Products from './components/Products';
import NotFound from './components/NotFound';
import Modal from './components/Modal';
import { useState } from 'react';
import Admin from './pages/Admin/Admin';
import Buyurtmalar from './pages/admin/Buyurtmalar';
import Customers from './components/Customers';
import Toifalar from './components/Toifalar';
import Mahsulotlar from './components/Mahsulotlar';
import Texnologiyalar from './components/Texnologiyalar';
import Manzil from './components/Manzil';


// import ModelA from './components/ModelA'
// import ModelB from './components/ModelB'
// import ModelC from './components/ModelC'
// import ModelD from './components/ModelD'
// import ModelE from './components/ModelE'

function App() {

  const  [token,setToken] = useState(JSON.parse(localStorage.getItem('token')) || '')
  console.log(token);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} >
            <Route path='barchasi' element={<Products />} />
            <Route path='modelA' element={<ModelA />} />
            <Route path='modelB' element={<ModelB/>} />
            <Route path='modelC' element={<ModelC/>} />
            <Route path='modelD' element={<ModelD/>} />
            <Route path='modelE' element={<ModelE/>} />
        </Route>
        <Route path='/admin' element={
        token ?
        <Admin />
        
       : <Login  data={{token, setToken}}/>} >
        <Route path='/admin/buyurtmalar' element={<Buyurtmalar />} />
        <Route path='/admin/customers' element={<Customers />} />
        <Route path='/admin/toifalar' element={<Toifalar />}/>
        <Route path='/admin/mahsulotlar' element={<Mahsulotlar />} />
        <Route path='/admin/texnologiyalar' element={<Texnologiyalar />} />
        <Route path='/admin/manzil' element={<Manzil />} />
       </Route>

        <Route path='*' element={<NotFound/>} />
        
      </Route>
    )
  )



  return (
    <div className='container-con'>
      {/* <Header /> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Login />} />
      </Routes> */}
    <RouterProvider router={routes} />
    {/* <Modal /> */}
    </div>
  );
}

export default App;
