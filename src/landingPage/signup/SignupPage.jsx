import React from 'react'
import Navbar from '../Navbar'
import Open_ac from './Open_ac'
import Investment from './Investment'
import Step from './Step'
import Benifite from './Benifite'
import Explore from './Explore'
import FAQ from './FAQ'
import Signup from '../Signup'
import Footer from '../Footer'

export default function SignupPage  ()  {
  return (
    <div>
        <Navbar/>
        <Open_ac/>
        <Investment/>
        <Step/>
        <Benifite/>
        <Explore/>
        <FAQ/>
        <Signup/>
        <Footer/>
    </div>
  )
}
