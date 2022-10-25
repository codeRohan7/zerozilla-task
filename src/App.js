import React, { useEffect, useState } from 'react'

import {   Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'
import DashBoard from './DashBoard';
import List from './list';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />}/>
          <Route path="/home" element={ <DashBoard />}/>
          <Route path="/cart" element={ <DashBoard />}/>

          <Route path="/product" element={ <DashBoard />}/>

          <Route path="/profile" element={ <DashBoard />}/>

        
        
          <Route path="/list/:id" element={<List />}/>
        

          <Route path='*' element={<h1>Error 404 Page not Found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
