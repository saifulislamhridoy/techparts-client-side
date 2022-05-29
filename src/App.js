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
import Footer from './components/Shared/Footer';
import AddReview from './components/Dashboard/AddReview';
import NotFound from './components/Shared/NotFound';

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
          <Route path='review' element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
