import React from 'react'

const Navbar = () => {

    const navlink = ["Home", 'About', "Contact"]

    return (
        <div className='w-full h-[100px]  px-28 flex justify-between items-center z-30'>


            <div className='w-[300px] flex justify-between items-center'> {navlink.map((value, key) => {
                return (
                    <span key={key} className='text-TextBlue'>{value}</span>
                )
            })} </div> 
            <div className='absolute left-1/2 text-TextBlue text-3xl font-bold '>Landing</div>
            <button className='w-[150px] h-7 bg-midnight text-white text-xs' >Buy Now</button>
         

     
        </div>
    )
}

export default Navbar