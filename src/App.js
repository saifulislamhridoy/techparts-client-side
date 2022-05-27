import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Navbar from './components/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import RequireAuth from './components/Login/RequireAuth';
import AddProduct from './components/Dashboard/AddProduct';
import AllUsers from './components/Dashboard/AllUsers';
import RequireAdmin from './components/Login/RequireAdmin';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='addpd' element={<AddProduct></AddProduct>}></Route>
          <Route path='allUser' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        </Route>
      </Routes>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
