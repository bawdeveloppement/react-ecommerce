import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import useTimeout from './hooks/timeout.hook';
import HomePage from './pages/homepage/home.component';
import './App.css';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/authpage/Auth.page';
import { auth } from './firebase/firebase.utils';


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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/hats" element={<HatsPage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
