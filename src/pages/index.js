import * as React from "react"
import Layout from "../components/globalC/Layout"


//Components
import Hero from "../components/home/Hero"
import PortfolioScroll from "../components/home/PortfolioScroll"
import PromoSection1 from "../components/home/PromoSection1"
import CaseStudiesLink from "../components/home/CaseStudiesLink"

const IndexPage = () => {
  return (

    <Layout>

      <Hero />

      <PortfolioScroll />

      <PromoSection1 />

      <CaseStudiesLink />

    </Layout>
  )
}

export default IndexPage
