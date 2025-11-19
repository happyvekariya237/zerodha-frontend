import React from 'react'

export default function Rightimg  ({imageURL,title,Description,link})  {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h2 className='mt-5'>{title}</h2>
            <p className='mt-4'>{Description}</p>
            <a href={link} className='mt-5'>Learn More</a>
          </div>
          <div className="col">
              <img src={imageURL} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
