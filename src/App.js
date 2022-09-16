import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Products from './components/Products'
import About from './components/About'
import Cart from './components/Cart'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
     <Nav/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Products></Products>}></Route>
          <Route path='/about/:id' element={<About></About>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='*' element={<div>404 page</div>}></Route>
        </Routes>
       <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
