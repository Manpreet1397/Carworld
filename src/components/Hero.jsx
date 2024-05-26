import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Card from './Card'

const Hero = () => {
    return (
        <div  style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url('gclass.png')`,
            backgroundSize: 'cover', // Adjust as needed
            backgroundRepeat: 'no-repeat', // Adjust as needed
            backgroundPosition: 'center', // Adjust as needed
            height: '100vh',
        }} className=' m-4 rounded-xl'>
            <Navbar/>
            <div
                className='bg-transparent text-white h-dvh flex flex-col gap-10 md:gap-2 md:justify-between py-24 px-16 '>
                <div className='flex justify-center' >
                    <div className='flex flex-col text-center justify-center gap-6' >
                        <div className='text-5xl font-bold text-white' style={{ whiteSpace: 'nowrap' }}>
                            <h1 className=''> Elegant, Classy, Futuristic.</h1>
                        </div>

                        <div className='text-center' >
                            <p>Introducing a tesla model y, an autopilot car that advances asafety and convience features to assist you the most burdensome parts of the driving.</p>
                        </div>
                        <div className='flex py-2 justify-center '>
                            <a href="#  " className='px-2 py-1 border-2 border-white bg-black hover:bg-red-900 rounded-3xl' >GET STARTED</a>
                        </div>
                        
                    </div>

                </div>
               
            </div>

        </div>
    )
}

export default Hero
