import React from 'react'
import Query from '../Query'
import ABOUT_QUERY from '../../apollo/queries/about/abouts'

import './styles/About.modules.css'

function About() {
  return (
    <section className="about-section container">
      <Query query={ABOUT_QUERY} id={null}>
        {({data: { abouts } }) => {
          return (
            <>
              {abouts.map(( { title, text, image} ) => (
                <div className="about">
                  <img className="about-image" src={`http://localhost:1337${image[0].url}`} />
                  <div className="about-text-block">
                    <h1>{title}</h1>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </>
          )
        }}
      </Query>
    </section>
  )
}

export default About
