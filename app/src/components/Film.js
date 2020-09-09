import React from 'react'

export default function Film(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </>
  )
}