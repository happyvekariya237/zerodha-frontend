import React from 'react'

export default function Leftimg
  ({imageURL,
    title,
    description,
    tryDemo,
    learnDemo,
    googleplay,
    appstore
  })  {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={imageURL} alt="" className='mb-5' />
          </div>
          <div className="col mt-4 p-5">
            <h2 >{title}</h2>
            <p className='mt-5'>{description}</p>
            <div className='justify-content-center'>
              <a href={tryDemo}>Try Demo</a>
              <a style={{marginLeft:"2rem"}} href={learnDemo}>Learn Demo</a>
            </div>
            <div className='mt-5'>
              <a href={googleplay}>
                <img src="/media/images/google-play-badge.svg" alt="" />
              </a>
              <a href={appstore} style={{marginLeft:"2rem"}}>
                <img src="/media/images/appstore-badge.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
