// import {RouterProvider, Outlet} from "react-router-dom";
// import router from "./Routers/Routes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';

const Login = lazy(() => new Promise(resolve => setTimeout(resolve, 500)).then(() => import('./pages/Login')));
const FoodManagement = lazy(() => import('./pages/FoodManagement'));
const ViewOrders = lazy(() => new Promise(resolve => setTimeout(resolve, 500)).then(() => import('./pages/ViewOrders')));
// const OrderDetail = lazy(() => new Promise(resolve => setTimeout(resolve,500)).then (() => import('./components/OrderDetail')));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/category' element={<FoodManagement />} />
          <Route path='/view' element={<ViewOrders />} />
          <Route path='/loading' element={<Loading />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
