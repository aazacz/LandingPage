import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Routes/Router';
import axiosInstanceUser from '../Services/AxiosInstance';
const Navbar = () => {

    const navlink = ["Home", 'About', "Contact"]
    const Authcontext = useContext(AuthContext);
    const { User, setUser } = Authcontext

    const logout=()=>{
        axiosInstanceUser.get("/logout").then(()=>{
            setUser({ name: "", email: "", auth: "" });

        })
    }
    return (
        <div className='w-full h-[100px]  px-20 flex justify-between items-center z-30'>


            <div className='w-[300px] flex justify-between items-center'> {navlink.map((value, key) => {
                return (
                    <span key={key} className='text-TextBlue'>{value}</span>
                )
            })} </div>
            <div className='absolute left-1/2 text-TextBlue text-3xl font-bold '>Landing</div>
            {User && User.name != "" ? <div className='absolute left-[920px] text-DarkBlue text-lg font-Roboto font-semibold'>Hai {User.name} </div> : <div className='absolute left-[850px] text-DarkBlue text-lg font-Roboto font-semibold'>Hai Guest </div>}

            <div className='flex gap-4'>

                <button className='w-[150px] h-7 bg-midnight text-white text-xs' >Buy Now</button>
               {User&&User.name!="" ?
                <button onClick={logout} className='w-[60px] h-7 border-2 border-DarkBlue  text-DarkBlue text-xs' >Logout</button>
               :
               <>
                <Link to="/login">
                    <button className='w-[60px] h-7 bg-midnight text-white text-xs' >Login</button>
                </Link>

                <Link to="/signup">
                <button className='w-[60px] h-7 border-2 border-DarkBlue  text-DarkBlue text-xs' >Signup</button>
                </Link>
               </>
               
               }

            </div>



        </div>
    )
}

export default Navbar