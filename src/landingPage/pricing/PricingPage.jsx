import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Brokerage from './Brokerage'
import Charges from './Charges'
import DMAT from './DMAT'
import Optional from './Optional'
import Explain from './explain'

export default function PricingPage  ()  {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Brokerage/>
        <Charges/>
        <DMAT/>
        <Optional/>
        <Explain/>
    </div>
  )
}
