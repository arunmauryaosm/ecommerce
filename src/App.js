import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Womens from './components/Women/Womens';
import Mens from './components/Men/Mens';
import SingleProduct from './SingleProduct';
import SingleProductWomen from './SingleProductWomen';
import Cart from './components/cart/Cart';
import Login from './components/authentication/Login';
import SignupScreen from './components/authentication/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout, selectUser } from './feature/userSlice';
import Profile from './pages/Profile';
import ConfirmOrder from './pages/ConfirmOrder';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email,
        }));
      } else{
        //logged out
        dispatch(logout(
        ))
      }
    });

    return unsubscribe;
  }, [dispatch]); 

  return (
    <div>
        
        <BrowserRouter>
        <Routes>
      {!user ? (
        <>
        {/* <Route path='/' element={<Login/>} /> */}
        <Route path='/signup' element={<SignupScreen/>} />
        <Route path='/cart' element={<Login/>} />
        </>
        ) : (
          <>
        <Route path='/cart' element={<Cart/>} />

          </>
        )}
        <Route path='/' element={<Home/>} />
        <Route path='/men' element={<Mens/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/confirmorder' element={<ConfirmOrder/>} />
        <Route path='/women' element={<Womens category={'women'}/>} />
        <Route path='/singleproduct/:id' element={<SingleProduct/>} />
        <Route path='/singleproductwomen/:id' element={<SingleProductWomen/>} />
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
