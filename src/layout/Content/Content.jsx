import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../utils/routes";
import { useState } from "react";
import Login from "../../pages/Login";
import Login1 from "../../pages/Login1";
import GamePage from "../../pages/GamePage";

const Content = () => {

  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className='main-content'>
      <Routes>
        <Route path='/' element={<ContentTop />}>
          {
            privateRoutes.concat(publicRoutes).map(({ name, path }) => (
              <Route key={name} path={path} Component={name} />
            ))
          }
        </Route>
        <Route path='/register' element={<Login1 />}>
          {
            <Route key={"Login1"} path={"create"} Component={GamePage} />
          }
        </Route>
        <Route key={"login"} path={"login"} Component={Login} />
      </Routes>
    </div>
  )
}

export default Content
