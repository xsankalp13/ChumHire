import React from 'react'

const FeaturePrivacy = () => {
  return (
    <div className='bg-gray-100'>
      <div className=' w-[1280px] mx-auto flex py-8'>
        {/* left side */}
        <div className='flex justify-center min-w-[40%]'>
          <img src="/assets/ScreenShot1.png" alt="Screenshot" className='w-[250px]'/>
        </div>
        {/* right side */}
        <div className='mt-5'>
          <h1 className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>What We think About Your Privacy</h1>
          <p className='mt-8 text-xl'>At ChumHire, we prioritize your privacy and offer customizable options to ensure a safe and comfortable experience. With our privacy features, you have the freedom to control who can see your profile. You can choose to limit visibility to your contacts, ensuring that only those you wish to connect with can find you. We understand that you may prefer to keep your interactions separate from school or college mates, so we provide the option to restrict your profile visibility specifically to this group. Additionally, our location-based privacy settings allow you to define a radius within which your profile will be visible, giving you the flexibility to connect with individuals nearby while maintaining privacy outside of that range. With these privacy options, we empower you to create meaningful connections while respecting your personal boundaries and preferences.</p>
        </div>
      </div>
    </div>
  
  )
}

export default FeaturePrivacy