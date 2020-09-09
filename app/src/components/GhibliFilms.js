import React from 'react'
import { connect } from 'react-redux'
import Film from './Film'

function GhibliFilms(props) {
  return (
    <>
      {props.films.map(film => (
        <Film key={film.id} film={film} />
      ))}
    </>
  )
}

function mapStateToProps(state) {

  return {
    films: state.films
  }
}

export default connect(mapStateToProps, {})(GhibliFilms)