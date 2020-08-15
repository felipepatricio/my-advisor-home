import React from 'react'

import './styles/Footer.module.css'
import '../../styles/globals.css'

function Footer() {

 return (
    <footer className="footer">
      <div className="footer-container">
        <span className="copy">&#169;	 Meu Conselheiro</span>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Logo do Meu Conselheiro" />
        </a>
        <button className="button button-primary">Cadastro</button>
      </div>
    </footer>
  )
}

export default Footer
