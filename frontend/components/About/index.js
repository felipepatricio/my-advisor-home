import React from 'react'
import Query from '../Query'
import ABOUT_QUERY from '../../apollo/queries/about/abouts'

import './styles/About.modules.css'

function About() {
  return (
    <section className="hero" id="about-us">
      <div className="hero-body">
        <div className="container">
          <div className="content">
            <h4 className="main_title title is-4">Explore Bulma Hotel</h4>
          </div>
          <div className="columns content">
            <div className="column">
              <p>
                With unmatched hospitality, convenience &amp; comforts, Bulma Hotel is an ideal choice for your stay.
                Whether business trip or just a weekend leisure, we make an effort to bestow the finest services, that
                will make your stay memorable.
              </p>
              <div className="reception">
                <h5 className="main_title title is-5">Reception</h5>
                <div className="reception-item">
                  <div>
                    <div>
                      <i className="fa fa-phone"></i>
                      <span>Phone Number</span>
                    </div>
                    <a href="tel:+302109999999">+30 210 9999999</a>
                  </div>
                  <a href="tel:+302109999999" className="button mobile-only">
                    <span>Call</span>
                  </a>
                </div>
                <div className="reception-item">
                  <div>
                    <div>
                      <i className="fa fa-phone"></i>
                      <span>Reservation</span>
                    </div>
                    <a href="tel:+302109999997">+30 2109999997</a>
                  </div>
                  <a href="tel:+302109999997" className="button mobile-only">
                    <span>Call</span>
                  </a>
                </div>
                <div className="reception-item">
                  <div>
                    <div>
                      <i className="fa fa-envelope"></i>
                      <span>Email</span>
                    </div>
                    <a href="mailto:reservations@bulmahotels.com">reservations@bulmahotels.com</a>
                  </div>
                  <a href="mailto:reservations@bulmahotels.com" className="button mobile-only">
                    <span>Mail</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="column reception-image">
              <img
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="Bulma Hotels"
              />
            </div>
          </div>
          <div className="content">
            <h5 className="main_title title is-5">Location</h5>
            <p>
              Bulma Hotel is a business hotel with 45 air conditioned luxury rooms. The hotel is conveniently located in
              close proximity to Athens, Greece.
            </p>
            <ul>
              <li>3 kms from Kifisia bus station and railway station.</li>
              <li>25 kms from Athens International Airport.</li>
              <li>Less than 2 km from nearest shopping malls (The Mall Athens, &amp; Icon Mall).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )

  // return (
  //   <section className="about-section container">
  //     <Query query={ABOUT_QUERY} id={null}>
  //       {({data: { abouts } }) => {
  //         return (
  //           <>
  //             {abouts.map(( { title, text, image} ) => (
  //               <div className="about">
  //                 <img alt="title" className="about-image" src={`https://boiling-beyond-15489.herokuapp.com${image[0].url}`} />
  //                 <div className="about-text-block">
  //                   <h1>{title}</h1>
  //                   <p>{text}</p>
  //                 </div>
  //               </div>
  //             ))}
  //           </>
  //         )
  //       }}
  //     </Query>
  //   </section>
  // )
}

export default About
