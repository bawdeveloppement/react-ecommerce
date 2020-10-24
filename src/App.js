//#region Dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useParams } from 'react-router';
//#endregion
//#region Custom Hooks & Functions
import useTimeout from './hooks/timeout.hook';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/User.actions';
//#endregion
//#region CSS
import './App.css';
//#endregion
//#region Components
import Header from './components/header/header.component';
//#endregion
//#region Modules
import HomePage from './modules/homepage/home.component';
import AuthPage from './modules/authpage/Auth.page';
import ShopPage from './modules/shop/Shop.page';
import ShopComponent from './modules/shop/Shop.component';
//#endregion


const ErrorPage = ({ redirect }) => {
  const navigate = useNavigate();
  return <div>
      Page non trouvé, redirection dans{" "}
      {useTimeout(redirect || 3, () => navigate(-1, { replace: true }))}
  </div>
}


function App() {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))
        });
      }
      dispatch(setCurrentUser(userAuth))
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (currentUser && currentUser.id) {
      console.log(currentUser);
    }
  }, [currentUser]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>}>
          <Route path={"/:category"} element={<ShopComponent/>}/>
        </Route>
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
