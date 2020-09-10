import React, { useEffect } from 'react';
import '../App.css';

import GhibliFilms from './GhibliFilms'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { fetchFilms } from '../store/actions/'

function App({ fetchFilms }) {

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms])

  return (
    <div className="App">
      <Navbar />
      <GhibliFilms />
    </div>
  );
}



export default connect(() => { return {} }, { fetchFilms })(App);
