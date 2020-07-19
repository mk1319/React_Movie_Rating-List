import React, { createContext } from 'react';
import HeaderNavbar from './Component/HeaderNavbar'
import CardRapper from "./Component/CardRapper"
import {MovieContaxt} from './Record/MovieRcord'
import {SearchContaxt} from './Record/seachRecord'

function App() {
  return (

  <MovieContaxt>
    <SearchContaxt>
    <div className="App">
      <HeaderNavbar/>
      <CardRapper/>
    </div>
    </SearchContaxt>
  </MovieContaxt>
  );
}

export default App;
