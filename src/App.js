import React, { createContext } from 'react';
import HeaderNavbar from './Component/HeaderNavbar'
import CardRapper from "./Component/CardRapper"
import {MovieContaxt} from './Record/MovieRcord'


function App() {
  return (

  <MovieContaxt>
    <div className="App">
      <HeaderNavbar/>
      <CardRapper/>
    </div>
  </MovieContaxt>
  );
}

export default App;
