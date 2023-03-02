import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Linax_command from './component/Linax_command';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<Main />}  ></Route> 
      </Routes>
  </BrowserRouter>
  );
}

export default App;
