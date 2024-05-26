import React from 'react'

const Card = ({title, text, icon}) => {
    return (
        <div className='flex justify-between'>
            <div>
                <h1>{title}</h1>
                <p className=' font-bold'>{text}</p>
            </div>
            <div>
                <img src={icon} alt="icon" />
            </div>
        </div>
    )
}

export default Card
