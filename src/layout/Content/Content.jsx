import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../utils/routes";
import { useContext, useState } from "react";
import Login from "../../pages/Login";
import LoginLayout from "../../pages/LoginLayout";
import { AuthContext } from "../../context";

const Content = () => {

  const { isAuth, isSending } = useContext(AuthContext);
  
  return (
    <div className='main-content'>
      <Routes>
        <Route path='/' element={<ContentTop />}>
          {
            
            isAuth
              ? privateRoutes.concat(publicRoutes).map(({ name, path }) => (
                <Route key={name} path={path} Component={name} />
              ))
              : publicRoutes.map(({ name, path }) => (
                <Route key={name} path={path} Component={name} red />
              ))
          }
        </Route>
        <Route key={"login"} path={"login"} Component={Login} />
      </Routes>
    </div>
  )
}

export default Content
