import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/home' element={<Home></Home>} ></Route>
      <Route path='/about' element={<About></About>} ></Route>

    </Routes>

    </div>
  );
}

export default App;
