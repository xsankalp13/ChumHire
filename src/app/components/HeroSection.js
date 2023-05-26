import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-gray-100'>
      <div className=' w-[1280px] mx-auto flex py-8'>
        {/* left side */}
        <div className='flex justify-center min-w-[40%]'>
          <img src="/assets/ScreenShot1.png" alt="Screenshot" className='w-[250px]'/>
        </div>
        {/* right side */}
        <div className='mt-5'>
          <h1 className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Why Chum Hire ? </h1>
          <p className='mt-8 text-xl'>We believe in the transformative power of genuine connections and shared experiences. ChumHire is more than just a renting app; it's a platform that brings people together, fostering authentic friendships and creating unforgettable memories. In a world where meaningful connections can be elusive, we're here to bridge the gap, combat loneliness, and provide a supportive community where individuals can find companionship, forge new relationships, and embark on exciting adventures. Join us on this journey of connection, discovery, and endless possibilities with ChumHire.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection