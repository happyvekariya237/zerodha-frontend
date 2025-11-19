import React from 'react'

export default function Nithin ()  {
  return (
    <div>
      <div className="container">
        <div className="row p-5">
          <div className="col p-5">
            <img src="/media/images/nithin-kamath.jpg" alt="" style={{borderRadius:"50%",height:"300px",width:"300px",marginLeft:"10rem"}} />
           <div className="intro text-center mt-4" style={{marginLeft:"6rem"}}>
             <p>Nithin Kamath</p>
            <p>Founder , CEO</p>
           </div>
          </div>
          <div className="col p-5">
            <h3 className='mb-5'>People</h3>
            <p className='mt-4'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
