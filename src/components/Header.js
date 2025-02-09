import React from 'react'
import '../styles/Header.css'

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Header
