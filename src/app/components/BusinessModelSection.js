import React from 'react'

const BusinessModelSection = () => {
  return (
    <div className='flex py-8 bg-white w-[1280px] mx-auto'>
      {/* left side */}
      <div className='mt-5'>
        <h1 className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Safety of</h1>
        <p className='mt-8 text-xl'>At ChumHire, we believe in simplicity and transparency. Our business model is straightforward: we charge a 5% fee on the rent amount. This fee allows us to sustain our operations, continuously improve our platform, and provide you with a reliable and seamless renting experience. We believe in fair pricing, ensuring that our fee remains reasonable and proportional to the value we offer. By charging a small percentage of the rent amount, we can keep our services accessible while maintaining the high standards of service you expect from us. We are committed to providing you with an excellent renting platform while being transparent about our pricing structure. Join us at ChumHire and experience the convenience and peace of mind of renting with ease.</p>
      </div>
      {/* right side */}
      <div className='flex justify-center min-w-[40%]'>
        <img src="/assets/ScreenShot2.png" alt="Screenshot" className='w-[250px]'/>
      </div>
    </div>
  )
}

export default BusinessModelSection