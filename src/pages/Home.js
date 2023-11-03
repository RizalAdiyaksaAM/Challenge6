import React, { useEffect } from 'react'
import { Navbar } from '../assets/components/Navbar'
import { SlideMovie } from '../assets/components/SlideMovie'
import { PopularMovie } from '../assets/components/PopularMovie'
import { CookieKeys, CookieStorage } from '../utils/cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const Home = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const cekCookie = CookieStorage.get(CookieKeys.AuthToken)
    if (!cekCookie) {
        navigate('/')
    } 
})


  return (
    <div className='bg-black'>
        <Navbar ></Navbar>
        <SlideMovie></SlideMovie> 
        <PopularMovie></PopularMovie>
    </div>
  )
}
