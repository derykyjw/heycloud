import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function index({data}) {
  
  return (
    <Layout>
      <main className='home-main'>
        <section className='home-section'>
          <div className='home-body'>
            <div>
              <h2>Cloud Solutions</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div>
              <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
            </div>
          </div>
        </section>
        <section className='home-partners'>
          <div>
            <h3>Our Partners:</h3>
          </div>
          <div>
            <StaticImage src="../assets/images/toyotsu.jpg" alt="toyotsu" />
          </div>
        </section>
        
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(layout:CONSTRAINED)
      }
    }
  }
`
