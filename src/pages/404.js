import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import tw from "twin.macro"
import styled from "@emotion/styled"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404" />
      <Hero className="min-h-screen text-gray-900 bg-gray-800 pattern-cross-dots-lg">
        <HeroContent>
          <Title>Encontraste un 404</Title>
        </HeroContent>
      </Hero>
    </Layout>
  )
}

export default NotFoundPage

const HeroContent = styled.div`
  ${tw`relative z-50 flex flex-col w-full max-w-6xl pt-16 pb-24 mx-auto text-center`}
`

const Title = styled.h1`
  ${tw`font-mono text-5xl text-white`}
`

const Hero = styled.div`
  ${tw`relative flex flex-col items-start justify-center w-full pt-24 pb-16 mx-auto`}
`
