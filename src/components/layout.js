import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import SEO from "./seo"

const breakpoints = [600, 900, 1200]
const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const Header = styled.header`
    background-color: #4e92ff;
    padding: ${rhythm(1)} ${rhythm(8)} ${rhythm(1)};
    ${mq[2]} {
        padding: ${rhythm(1)} ${rhythm(4)} ${rhythm(1)};
    }
    ${mq[1]} {
        padding: ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
    }
    ${mq[0]} {
        padding: ${rhythm(1)};
    }
`

const HeaderLink = styled(Link)`
    display: inline-block;
    margin: ${rhythm(0.5)};
    text-align: left;
    color: #ffffff;
    margin: 0;
    font-size: 150%;
    font-weight: bold;
    vertical-align: middle;
`

const Body = styled.div`
    background-color: #f2e8cf;
    color: #000000;
    padding: ${rhythm(1)} ${rhythm(8)} ${rhythm(1)};
    ${mq[2]} {
        padding: ${rhythm(1)} ${rhythm(4)} ${rhythm(1)};
    }
    ${mq[1]} {
        padding: ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
    }
    ${mq[0]} {
        padding: ${rhythm(1)};
    }
`

const Footer = styled.footer`
    background-color: #4e92ff;
    color: #ffffff;
    font-size: 90%;
    padding: ${rhythm(1)} ${rhythm(8)} ${rhythm(1)};
    ${mq[2]} {
        padding: ${rhythm(1)} ${rhythm(4)} ${rhythm(1)};
    }
    ${mq[1]} {
        padding: ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
    }
    ${mq[0]} {
        padding: ${rhythm(1)};
    }
`

const FooterIcon = styled.a`
    width: 10%;
    display: inline-block;
    margin: ${rhythm(0.1)};
    padding: ${rhythm(0.1)};
    background-image: none;
    fill: #ffffff;
`

const Attribution = styled.div`
    margin: 0;
`

const footerLinks = ["https://www.linkedin.com/in/lorenzo-aquino"]

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { extension: { eq: "png" } }) {
                edges {
                    node {
                        childImageSharp {
                            fluid(maxWidth: 50, quality: 100) {
                                ...GatsbyImageSharpFluid
                                ...GatsbyImageSharpFluidLimitPresentationSize
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div>
            <SEO title="Lorenzo Aquino" description="Personal website of Lorenzo B Aquino"/>
            <Header>
                <HeaderLink to="/">LORENZO</HeaderLink>
                <HeaderLink
                    to="/contact"
                    css={css`
                        width: 30%;
                        float: right;
                        text-align: center;
                    `}
                >
                    Contact
                </HeaderLink>
                <HeaderLink
                    to="/life"
                    css={css`
                        width: 20%;
                        float: right;
                        text-align: center;
                    `}
                >
                    Life
                </HeaderLink>
            </Header>
            <Body>{children}</Body>
            <Footer>
                {footerLinks.map((link, index) => {
                    return (
                        <FooterIcon href={link}>
                            <Img
                                fluid={
                                    data.allFile.edges[index].node
                                        .childImageSharp.fluid
                                }
                            ></Img>
                        </FooterIcon>
                    )
                })}
                <Attribution>
                    Icons made by{" "}
                    <a
                        href="https://www.flaticon.com/authors/freepik"
                        title="Freepik"
                    >
                        Freepik
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                        www.flaticon.com
                    </a>
                </Attribution>
                © 2020 Lorenzo Aquino
            </Footer>
        </div>
    )
}
