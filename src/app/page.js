import React from 'react'

import { BusinessModelSection, FeaturePrivacy, FeatureSeftey, HeroSection, NewsLetterSection } from './components'



const page = () => {
  return (
    <>
      <HeroSection />
      <FeatureSeftey/>
      <FeaturePrivacy/>
      <BusinessModelSection/>
      <NewsLetterSection/>
    </>
  )
}

export default page