import React from 'react'

const Form = () => {
  return (
    <div className='bg-black text-white px-8 lg:px-40 xl:px-48 py-32 flex flex-col justify-between items-center gap-10 md:h-[800px]'>
      <div className=' text-2xl md:text-4xl xl:text-6xl font-extrabold text-center uppercase'>
        
        <h1>BECOME OUR MEMBER</h1>
      </div>
      <form action="" className='  py-6 md:py-8 px-4 md:px-10 rounded-xl flex  gap-4 w-[80%] md:w-[60%]'>
        <input className=' bg-transparent border-2 border-slate-300 px-4 py-2  rounded-2xl' type="text" name="FName" id="fname" placeholder='👤Your Name' />
        <input className=' bg-transparent border-2 border-slate-300 px-4 py-2 rounded-2xl' type="email" name="Email" id="fname" placeholder='📧Email Address ' />
        <button className=' border-white text-white rounded py-4  md:text-5l md:font-bold' type="submit">➡️</button>
      </form>
    </div>
  )
}

export default Form
