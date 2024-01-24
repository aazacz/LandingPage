import React, { useEffect, useState } from 'react'
import TitleIcon from './TitleIcon'
import HomepageSvg2 from './HomepageSvg2'
import axios from 'axios'

const About = () => {
    const baseUrl = "http://localhost:3000/images"
    const [HomeData, setHomeData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/homeDetails").then((response) => {

            console.log(response.data);
            setHomeData(response.data)
        })


    }, [])

    return (
        <div className='px-28 py-20 '>
            <div className='flex items-center'>
                <div className='w-1/2'>
                    <h1 className='text-TextBlue text-4xl font- font-Roboto'> Light, Fast & Powerful</h1>
                    <span className='text-TextBlue'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus<br /><br />
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </span>
                    <div className='pt-4 w-full flex mt-8 gap-5  '>
                        <div className='w-1/2 '>
                            <TitleIcon />
                            <h1 className='text-xl pt-4 font-bold '>Title Goes Here</h1>
                            <h3 className='pt-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </h3>
                        </div>
                        <div className='w-1/2 '>
                            <TitleIcon />
                            <h1 className='text-xl pt-4 font-bold '>Title Goes Here</h1>
                            <h3 className='pt-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </h3>
                        </div>



                    </div>
                </div>
                <div className='w-1/2'>
                    <HomepageSvg2 />
                </div>
            </div>
           
            <div className='mt-20'>
                {HomeData.map((value, key) => {
                    return (
                        <div key={key} className='w-full flex py-12 items-center'>
                            <div className='w-1/2'>
                                <img src={`${baseUrl}/${value.img}`} className='w-[300px]' alt="" />
                            </div>

                            <div className='w-1/2'>
                                <h1 className='text-xl pt-4 font-bold '>{value.heading}</h1>
                                <h3 className='pt-2 text-gray-700'>{value.text}</h3>
                            </div>
                        </div>
                    )
                })
                }
 
            </div>
        </div>

    )
}

export default About