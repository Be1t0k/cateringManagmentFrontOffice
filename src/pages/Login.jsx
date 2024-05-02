import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
//import { AuthContext } from '../context/context';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Login = () => {
  //const { isAuth, setIsAuth, setClient, isClient } = useContext(AuthContext);
  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();
  

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [setClient, isClient] = useState(false);
  

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login',
        JSON.stringify({ name: user, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        }
      );
      const client_data = response.data;
      setClient({ id: response.data.clientDTO.id, name: response.data.clientDTO.name, email: email, password: pwd });
      setIsAuth(true);
      localStorage.setItem('auth', true);
      localStorage.setItem('client_data', JSON.stringify({ id: client_data.clientDTO.id, name: client_data.clientDTO.name, email : email, password: client_data.clientDTO.password, role: client_data.rolesDTO.id}));
      setUser('');
      setEmail('');
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
          <h1 className='btn-login-center'>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className={ `nav-link active ${5 == 5 ? 'btn-login-center' : null}` }>Login</button>
          </form>
          </section>
      )}
    </div>
  )
}

export default Login