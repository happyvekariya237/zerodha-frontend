import React from 'react'

export default function Charges  ()  {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="/media/images/0.svg" alt="" className='p-5' />
            <div className='text-center' style={{padding:"0 2rem 0 2rem"}}>
              <h2>Free equity delivery</h2>
              <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
          </div>
          <div className="col">
            <img src="/media/images/20.svg" alt="" className='p-5'/>
            <div  className='text-center ' style={{padding:"0 2rem 0 2rem"}}>
              <h2>Intraday and F&O trades</h2>
              <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
          </div>
          <div className="col">
            <img src="/media/images/0.svg" alt="" className='p-5'/>
            <div  className='text-center' style={{padding:"0 2rem 0 2rem"}}>
              <h2>Free direct MF</h2>
              <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
