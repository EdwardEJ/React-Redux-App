import React, { useEffect } from 'react';
import '../App.css';

import GhibliFilms from './GhibliFilms'
import { connect } from 'react-redux'
import { fetchFilms } from '../store/actions/'

function App({ fetchFilms }) {

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms])

  return (
    <div className="App">
      <GhibliFilms />
    </div>
  );
}



export default connect(() => { return {} }, { fetchFilms })(App);
