import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import classes from './Layout.module.css'
import MyButton from '../MyButton/MyButton'
import { AuthContext } from '../../context/context'
import { useCart } from 'react-use-cart'
import { useContext } from 'react';
const Layout = () => {
  const {
    isEmpty,
    addItem,
    cartTotal,
    items,
    removeItem,
    emptyCart,
  } = useCart();
  const { isAuth, setIsAuth, isClient } = useContext(AuthContext);
  const client_data = JSON.parse(localStorage?.getItem('client_data'));

  const logout = () => {
    setIsAuth(false);
    emptyCart();
    localStorage.removeItem('auth');
    localStorage.removeItem('client_data');
  }
  return (
    <>
      <header className={classes.navbar}>
        <NavLink to={'/'}><img src="http://localhost:8080/games/31/secondImage" alt="" width={'70px'} height={'70px'} /></NavLink>
        <NavLink to={'/games'}>Список игр</NavLink>
        <NavLink to={'/genredgames'}>Жанры</NavLink>
        <NavLink to={'/about'}>О сайте</NavLink>
        <NavLink to={`/wishlist/${client_data?.id}`} >Список желаемого</NavLink>
        <NavLink to={'/registration'}>Зарегистрироваться</NavLink>
        {client_data ?
          <NavLink to={'account'}>{client_data.name}</NavLink>
          : null}
        {
          isAuth
            ? <MyButton onClick={logout}>Выйти</MyButton>
            : <NavLink to='/login'>
              Войти
            </NavLink>
        }
      </header>
      <Outlet />
      <footer></footer>
    </>
  )
}

export default Layout