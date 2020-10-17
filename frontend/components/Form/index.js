import React from 'react'

import './styles/Form.module.css'

function Form() {
  return (
    <section className="hero" id="contact-us">
      <div className="hero-body">
        <div className="container">
          <div className="content">
            <h4 className="title is-4">Cadastre-se</h4>
          </div>
          <div className="box newsletter-form">
            <form className="column is-full newsletter-form" action="#">
              <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Seu Nome" required=""/>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" placeholder="Seu Email" required=""/>
                </div>
              </div>
              <div className="field">
                <label className="label">Whatsapp</label>
                <div className="control">
                  <input className="input" type="tel" placeholder="Seu número de whatsapp" required=""/>
                </div>
              </div>
              <div className="field">
                <label className="label">Menssagem</label>
                <div className="control">
                  <textarea className="textarea" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-link is-medium">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
