import React from 'react'

export default function Hero ()  {
  return (
    <div className="container p-5 ">
      <div className="row  text-center">
          <img src="/media/images/landing_hero.svg" alt="Landing Hero" className='p-5 hero_img' />
          <h2 className='mt-3'>Invest in everything</h2>
          <h5 className='mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
          <button style={{width:"20%", height:"50px",margin:"0 auto",fontSize:"large"}} type="button" class="btn btn-primary mt-4">Sign up for free</button>
      </div>
    </div>
  )
}
