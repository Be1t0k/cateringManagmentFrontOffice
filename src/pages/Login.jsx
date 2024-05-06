import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
//import { AuthContext } from '../context/context';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PhoneInput, { PhoneNumber } from 'react-phone-number-input/input';

const Login = () => {
  //const { isAuth, setIsAuth, setClient, isClient } = useContext(AuthContext);
  const phoneRef = useRef();
  const errRef = useRef();

  const [phone, setPhone] = useState('+7');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [setClient, isClient] = useState(false);


  useEffect(() => {
    setErrMsg('');
  }, [phone, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(phone.length);
      const response = await axios.post('http://localhost:8080/login',
        JSON.stringify({ phone: phone, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        }
      );
      const client_data = response.data;
      setClient({ id: response.data.clientDTO.id, phone: response.data.clientDTO.name, password: pwd });
      setIsAuth(true);
      localStorage.setItem('auth', true);
      localStorage.setItem('client_data', JSON.stringify({ id: client_data.clientDTO.id, phone: response.data.clientDTO.name, password: client_data.clientDTO.password, role: client_data.rolesDTO.id }));
      setPhone('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
        console.log(err)
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
  }

  return (
    <div className='wrapper'>
      {success ? (
        <section>
          <h1>Вы в системе!</h1>
          <br />
          <p>
            <NavLink to="/">На главную</NavLink>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1 className='btn-login-center'>Вход</h1>
          <form onSubmit={handleSubmit}>

            <label htmlFor="phone">Номер телефона:</label>
            <PhoneInput
              value={phone}
              ref={phoneRef}
              autoComplete="off"
              name="phone"
              onChange={setPhone}
              required
              maxLength="16" />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className={`nav-link active ${5 == 5 ? 'btn-login-center' : null}`}>Login</button>
          </form>
        </section>
      )}
    </div>
  )
}

export default Login