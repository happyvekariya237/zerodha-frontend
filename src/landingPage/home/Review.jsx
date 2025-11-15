import React from 'react'

export default function review  () {
  return (
    <div>
      <div className="container p-5">
        <div className="row p-5">
          <div className="col-6 p-5">
            <h2>Trust with confidence</h2>
            <h3 className='mt-5'>Customer-first always</h3>
            <p className='opacity-75'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            <h3>No spam or gimmicks</h3>
            <p className='opacity-75'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
            <h3>The Zerodha universe</h3>
            <p className='opacity-75'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            <h3>Do better with money</h3>
            <p className='opacity-75'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
          <div className="col-6 ">
            <img src="/media/images/review.png" alt="" style={{height:"550px" , width:"550px"}} />
            <div className="links mx-5 mt-3 ">
              <a href="" className='mx-5'> explore our products <i class="fa-solid fa-arrow-right"></i></a>
              <a href="" className='mx-4' >try our kit <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <img src="/media/images/review_foot.png" alt="" className='d-block mx-auto pb-5 mb-5'/>
      </div>
    </div>
  )
}
