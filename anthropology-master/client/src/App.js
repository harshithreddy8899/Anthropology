import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login/login';
import HomePage from './components/Home/homepage';
import Register from './components/Login/register';
import {useEffect, useState} from 'react';
import apis from './api';
function App() {
  const [user, setUser]=useState(null)
  useEffect(()=>{
    apis.GetUser().then(res => {
      setUser(res.data.username);
    }).catch(e=>{
      console.log(e);
    })
  },[]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user? <HomePage setUser={setUser} user={user}/>:<Login setUser={setUser} />}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
