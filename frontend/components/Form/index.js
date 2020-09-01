import React from 'react'

function Form() {
  return (
    <section className="hero" id="contact-us">
      <div className="hero-body">
        <div className="container">
          <div>
            <div className="content">
              <h4 className="title is-4">Contact Us</h4>
            </div>
            <h6 className="subtitle is-6">If you've any queries feel free to contact us</h6>
            <div className="columns box">
              <form className="column" action="#">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Your Name" required=""/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Email address" required=""/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Phone Number</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Phone number" required=""/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      type="text"
                      placeholder="Type your message here..."
                      required=""
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label"></label>
                  <div className="control">
                    <input className="button is-primary" type="submit"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
