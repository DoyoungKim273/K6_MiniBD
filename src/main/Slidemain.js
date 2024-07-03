import React, { useEffect, useState } from 'react'
import lina from '../img/lina.jpg'
import pixa from '../img/pixa.jpg'
import rene from '../img/rene.jpg'

export default function Slidemain() {
    const images = [lina, pixa, rene];
    const [currentIndex , setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);         
        }, 4000);

        return () => clearInterval(interval)

    },[images.length])

  return (
    <div className='relative w-full h-full'>
        <ul className='absolute w-full h-full'>
            {images.map((image, index) => (
                <li key={index} className={`absolute w-full h-full 
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={image} alt={`slide-${index}`} className='w-full h-full object-cover'/>
                </li>
            ))}
        </ul>
    </div>
  )
}
