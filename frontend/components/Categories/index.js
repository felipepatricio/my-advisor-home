import React from 'react'

function Category() {
  return (
    <section className="hero" id="categories">
      <div className="hero-body">
        <div className="container">
          <div className="categories columns">
            <!-- Executive Gold Single -->
            <div className="column">
              <figure className="image">
                <img
                  src="https://images.unsplash.com/photo-1515510621228-30de609bbd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="Executive Gold Single"
                />
              </figure>
              <div className="content">
                {/*<div></div>*/}
                <h1 className="title is-6">Executive Gold Single</h1>
                <p>The Executive Gold Single categories can hold <b>2 guests</b> (with extra bed €50).</p>
              </div>
            </div>
            <!-- Executive Gold Double -->
            <div className="column">
              <figure className="image">
                <img
                  src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="Executive Gold Double"
                />
              </figure>
              <div className="content">
                {/*<div></div>*/}
                <h1 className="title is-6">Executive Gold Double</h1>
                <p>The Executive Gold Double categories can hold <b>3 guests</b> (with extra bed €50).</p>
              </div>
            </div>
            <!-- Premier Diamond Single -->
            <div className="column">
              <figure className="image">
                <img
                  src="https://images.unsplash.com/photo-1590490360836-2e3b067c082b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="Premier Diamond Single"
                />
              </figure>
              <div className="content">
                {/*<div></div>*/}
                <h1 className="title is-6">Premier Diamond Single</h1>
                <p>The Premier Diamond Single categories can hold <b>2 guests</b> (with extra bed €50).</p>
              </div>
            </div>
            <!-- Premier Diamond Double -->
            <div className="column">
              <figure className="image">
                <img
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="Premier Diamond Double"
                />
              </figure>
              <div className="content">
                {/*<div></div>*/}
                <h1 className="title is-6">Premier Diamond Double</h1>
                <p>he Premier Diamond Double categories can hold <b>3 guests</b> (with extra bed €50).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
