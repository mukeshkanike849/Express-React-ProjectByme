import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/organisms/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/organisms/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/Register-page' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
