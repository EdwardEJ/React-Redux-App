import React from 'react'

export default function Film({ film }) {
  return (
    <>
      <h2>{film.title}</h2>
      <p>{film.description}</p>
    </>
  )
}