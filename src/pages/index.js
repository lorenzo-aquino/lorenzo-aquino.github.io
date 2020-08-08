import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function Home({ data }) {
    return (
        <Layout>
            <Img
                fluid={data.file.childImageSharp.fluid}
                css={css`
                    margin: ${rhythm(1)} auto;
                    border-radius: 50%;
                    width: 100%;
                `}
            ></Img>
            <p>
                Hi! I'm Lorenzo Aquino, and I'm a software engineer based in the
                Philippines.
            </p>
            <p>
                As of 2020, I have been working for eight years in the software
                industry. I am an excellent communicator and have experience
                working as a lead and as an individual contributor to teams of
                multi-nationals.
            </p>
            <p>
                I have worked with a lot of different technologies throughout my
                stay in multiple international companies and can adapt quickly
                to any software development environment.
            </p>
            <p>
                I work on back-end/front-end development with JavaScript and
                SuiteScript, but also have data migration-related experience
                using PL/SQL.
            </p>
            <p>
                My background also includes working on the different stages of
                the software development lifecycle.
            </p>
        </Layout>
    )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "avatar.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                }
            }
        }
    }
`
