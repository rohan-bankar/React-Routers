import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();
    // const[data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rohan-bankar')
    //     .then(response => response.json())
    //     .then(data=>{
    //     setData(data)
    //     })
    // },[])
  return (
    <div className='text-center bg-gray-600 text-3xl p-2 text-white'>Github Followers: {data.followers}
    <img  src={data.avatar_url} alt="github profile" width={200} />
    </div>
  )
}

export default Github

export const gitInfoLoader = async ()=>{
   const response = await fetch('https://api.github.com/users/rohan-bankar')
   return response.json()
}