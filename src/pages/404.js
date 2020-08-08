import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Page404() {
    return (
        <Layout>
            <h1>Page not found</h1>
            <p>
                Oops! The page you are looking for does not exist.
            </p>
            <Link to="/">Go Back</Link>
        </Layout>
    )
}
