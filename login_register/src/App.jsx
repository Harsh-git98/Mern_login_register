import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup.jsx';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';

import { AuthProvider } from './AuthContext.jsx';


function App() {
 

  return (
    <div>
      <AuthProvider>
      <BrowserRouter> 
       <Routes>

        <Route path ='/register' element={<Signup/>}></Route>
        <Route path ='/login' element={<Login/>}></Route>
        <Route path ='/home' element={<Home/>}></Route>
        <Route path='/*' element={<div><hr></hr><h1>Error:404</h1> Page not Found!!<hr></hr></div>}></Route>

      </Routes>
      </BrowserRouter>
      </AuthProvider>
    


    </div>
  )
}

export default App;
