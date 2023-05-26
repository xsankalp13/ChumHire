import React from 'react'

const FeatureSeftey = () => {
  return (
    <div className='flex py-8 bg-white w-[1280px] mx-auto'>
      {/* left side */}
      <div className='mt-5'>
        <h1 className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Safety of</h1>
        <p className='mt-8 text-xl'>At ChumHire, user safety is our top priority. We implement a comprehensive user verification process to establish trust and authenticity. Our platform upholds strict privacy protection measures and clearly communicates our privacy policy. We have established safety guidelines and community standards, along with a user review and rating system, to promote transparency and accountability. Our moderation techniques and content filtering mechanisms ensure a safe environment, and we encourage users to report any concerns. We provide secure payment options and offer responsive customer support. We are committed to continuous improvement, regularly updating our safety measures based on user feedback and industry best practices, to provide a secure and trusted experience for all users.</p>
      </div>
      {/* right side */}
      <div className='flex justify-center min-w-[40%]'>
        <img src="/assets/ScreenShot2.png" alt="Screenshot" className='w-[250px]'/>
      </div>
    </div>
  )
}

export default FeatureSeftey