import {BrowserRouter, Routes,Route,Link  } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Routes>
            <Route path='/' element={<h1>Exact Path</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
