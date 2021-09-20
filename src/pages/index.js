import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const Image = styled.img`
  border-radius: 5px;
  max-width: 100%;
`

export default function Home({ data }) {
  console.log("data", data)
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer Based in Manchester</p>
          <Link to="/projects" className={styles.btn}>
            {" "}
            My portfolio project page
          </Link>
        </div>
        <Image
          src={
            "https://raw.githubusercontent.com/iamshaunjp/gatsby-tutorial/lesson-7/static/banner.png"
          }
          alt="Banner Image"
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
