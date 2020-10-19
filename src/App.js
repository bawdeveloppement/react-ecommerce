import React from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import useTimeout from './hooks/timeout.hook';
import HomePage from './pages/homepage/home.component';
import './App.css';
import ShopPage from './pages/shoppage/shop.component';



const HatsPage = () => {
  const navigate = useNavigate();
  return  <div>
    <button onClick={() => navigate(-1)}>go back</button>
    <h1>Hats page</h1>
  </div>
}

const ErrorPage = ({ redirect }) => {
  const navigate = useNavigate();
  return <div>
      Page non trouvé, redirection dans{" "}
      {useTimeout(redirect || 3, () => navigate(-1, { replace: true }))}
  </div>
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/hats" element={<HatsPage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
