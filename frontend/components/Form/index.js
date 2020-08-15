import React from 'react'

function Form() {
  return (
    <form>
      <div className="field">
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="text" placeholder="Seu Nome" />
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="email" placeholder="Seu Email" />
            </div>
          </div>
        </div>
      </div>
    
      <div className="field">
        <div className="field-body">
          <div className="control">
            <button className="button button-primary">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Form
