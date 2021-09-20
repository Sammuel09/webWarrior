import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;

  h1 {
    color: red;
  }
`

export default function Projects() {
  return (
    <Layout>
      <Container>
        <h1>Projects I have built</h1>
      </Container>
    </Layout>
  )
}
