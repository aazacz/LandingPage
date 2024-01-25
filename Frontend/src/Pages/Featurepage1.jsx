import React, { useState } from 'react'
import TitleIcon from '../Components/TitleIcon'

const Featurepage1 = () => {
    const [image,setimage] = useState()
    const handleOnError = (e) => {
        console.error("Image loading failed:", e);
        e.target.src =
          "./public/default.jpg";
    }
    return (
        <div className=' w-full flex items-center justify-center p-32 '>
            <div className='w-1/2'>
                <h1 className='text-TextBlue text-4xl font- font-Roboto'> Design & Build Your Own Landing Pages </h1>
                <p className='pt-2 text-gray-700 '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            
            <div className='pt-5 w-full grid grid-flow-row grid-cols-2  gap-x-3 gap-y-6'>
               
                <div>
                <TitleIcon/>
                <h1 className='pt-3 text-TextBlue text-xl font- font-Roboto'> Title Goes Here </h1>
                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>





            </div>
            
            
            </div>

            <div className='w-1/2 flex justify-center'>
                  <img src="http://localhost:3000/images/mobile-01.png" onError={handleOnError}  alt="No Image Found" className='absolute bottom-0 w-[350px]' />
            </div>

        </div>
    )
}

export default Featurepage1