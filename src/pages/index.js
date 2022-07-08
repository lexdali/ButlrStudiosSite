import * as React from "react"
import Layout from "../components/globalC/Layout"


//Components
import Hero from "../components/home/Hero"
import PortfolioScroll from "../components/home/PortfolioScroll"
import PromoSection1 from "../components/home/PromoSection1"
import CaseStudiesLink from "../components/home/CaseStudiesLink"
import PromoSection2 from "../components/home/PromoSection2"
import ContactSection from "../components/home/ContactSection"

const IndexPage = () => {

  return (
    <div>
    <Layout>

      <Hero/>

      {/* <PortfolioScroll /> */}

      <PromoSection1 />

      <CaseStudiesLink />

      <PromoSection2 />

      <ContactSection />

    </Layout>
    </div>
  )
}

export default IndexPage
