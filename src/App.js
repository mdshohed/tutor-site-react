import './App.css';
import NotFound from './pages/Shared/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Login from './pages/Home/Login/Login/Login';
import Register from './pages/Home/Login/Register/Register';
import RequireAuth from './pages/Home/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/services" element={
          // <RequireAuth>
            <Services></Services>
          /* </RequireAuth> */
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
