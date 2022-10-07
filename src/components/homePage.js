import React from 'react'
import online_shopping from '../resources/images/PngItem_609712.png'

function homePage() {
  return (
    <div className='mt-5'>
      <div className='row row-cols-lg-2 row-cols-md-1 row-cols-sm-1'>
        <div className='col d-flex justify-content-center align-items-center flex-column'>
          <div className='text-center'>
            <h1 className="display-3 text-primary">Buy now all your needs</h1>
            <h1 className="display-1">From one place</h1>
            <h1 className="display-6 fs-5 text-primary mt-3 fw-bold">Hurry up !!  ... Don't miss our discounts</h1>
          </div>
          <a className="btn btn-primary btn-lg mt-5 w-50 d-flex justify-content-center align-content-center" href="/products" role="button">Explore more<span className='ms-1'>&rarr;</span></a>
        </div>
        <img src={online_shopping} alt='online-store-img' className='col' />

      </div>
    </div>
  )
}
export default homePage;