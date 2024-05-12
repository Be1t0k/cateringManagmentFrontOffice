import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isClient, setClient] = useState();

  useMemo(() => ({ isClient, setClient }), [isClient, setClient]);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, setIsAuth, isLoading, isClient, setClient
    }}>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Content />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
