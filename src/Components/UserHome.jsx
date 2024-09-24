import React from 'react'
import UserHeader from './UserHeader'
import './Header.css'
import Hero from './Hero'
import Jobs from './Job'


export default function Home() {
  return (
    <div>
        <UserHeader/>
        <Hero/>
        <Jobs/>
    </div>
  )
}
