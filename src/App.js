import React from 'react';
import DefinicionProgramacionWeb from './components/DefinicionWeb'; 

import Navbar from './components/Navbar';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 

function App() { 
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          <Route path="/definicion-programacion-web" element={<DefinicionProgramacionWeb />} >

          <DefinicionProgramacionWeb />

          </Route>


          <Route path="/">
            <div className="container text-center">

            <h1 className="mt-5" style={{ fontFamily: 'Cambria, sans-serif' }}>BIENVENIDO A MI PÁGINA WEB</h1>

            <h2 className="mt-5">Tarea de Programación Web</h2>
            <img src="https://i.pinimg.com/originals/f6/91/ce/f691ce9c85a2ac31356cb2dcf4837e8c.gif" alt="GIF" className="img-fluid" />
            <h4 className="mt-5">Alumno: Roger Rodriguez</h4>

            </div>
          </Route>

          
        </Switch>


      </div>
    </Router>
  );
}

export default App;