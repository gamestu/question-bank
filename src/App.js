import React from 'react';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import MathMooInk from './MathMooInk';
import MathWeb from './MathWeb';
const App = ()=>{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/math/mooInk" element={<MathMooInk/>}></Route>
          <Route path="/math/web" element={<MathWeb />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
