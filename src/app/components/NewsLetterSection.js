"use client"

const NewsLetterSection = () => {

  const SumbmitFormHandler = (e) => {
    e.preventDefault()
    console.log(`email is ${e.target.value}`)
  }

  return (
    <div className='bg-gray-200'>
      
      <div className="w-[1280px] py-8 mx-auto flex flex-col items-center">

        <h1 className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Subscribe to News Letter</h1>
        <form className='flex justify-center mt-7' onSubmit={SumbmitFormHandler}>
          <input type="email" placeholder='Enter your email address' className='w-[500px] h-[50px] px-4 rounded-l-md outline-none' required/>
          <button className='bg-[#ff4747] hover:bg-red-400 duration-300 text-white font-bold px-4 rounded-r-md'>Subscribe</button>
        </form>
      </div>
      
    </div>
  )
}

export default NewsLetterSection