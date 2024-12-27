import './App.css';
import data from './data/Feature.json';
import Feature from './components/Feature';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import CartState from './context/Cartstate';


function App() {

  return (
  <>
      <Router>
      <CartState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Routes>
          <Route path="/paperBag" element={<Feature title={data[0].title} img={data[0].img} data={data[0].list} />} />
        </Routes>
        <Routes>
          <Route path="/honeyComb" element={<Feature title={data[1].title} img={data[1].img} data={data[1].list} />} />
        </Routes>
        <Routes>
          <Route path="/paperTapes" element={<Feature title={data[2].title} img={data[2].img} data={data[2].list} />} />
        </Routes>
        <Routes>
          <Route path="/foodPack" element={<Feature title={data[3].title} img={data[3].img} data={data[3].list} />} />
        </Routes>
        
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
       






        </CartState>
      </Router>

    </>
  )
}

export default App;
