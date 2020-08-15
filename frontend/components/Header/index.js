import React from 'react'

import './styles/Header.modules.css'
import '../../styles/globals.css'

function Header() {
  return (
    <div className="header-container">
      <div className="header-paragraph">
        <h1>Introduce Your Product Quickly & Effectively</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</p>
        <div className="field is-grouped">
          <div className="control">
            <button className="button button-primary">Quero me cadastrar</button>
          </div>
          <div className="control">
            <button className="button button-secondary">Saber mais</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
