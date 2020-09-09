import React, { useEffect } from 'react';
import '../App.css';

import GhibliFilms from './GhibliFilms'
import { fetchFilms } from '../store/actions/'

function App({ fetchFacts }) {

  useEffect(() => {
    fetchFilms();
  }, [fetchFacts])

  return (
    <div className="App">
      <GhibliFilms />
    </div>
  );
}



export default App;
