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
            <h4 className="main_title title is-4">O que é o Meu Conselheiro? </h4>
          </div>
          <div className="columns content">
            <div className="column">
              <p>
                With unmatched hospitality, convenience &amp; comforts, Bulma Hotel is an ideal choice for your stay.
                Whether business trip or just a weekend leisure, we make an effort to bestow the finest services, that
                will make your stay memorable.
              </p>
            </div>
            <div className="column reception-image">
              <img
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="Bulma Hotels"
              />
            </div>
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
