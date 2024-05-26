import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className=' px-4 py-2 bg-white text-red-600 rounded-full'>{text}</button>
    </div>
  )
}

export default Button;
