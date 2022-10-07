import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function product() {

      const params = useParams();

      const [product, setProducts] = useState({})
      const [counter, setCounter] = useState(0)

      useEffect(() => {
            fetch('https://dummyjson.com/products/' + params.id)
                  .then(res => res.json())
                  .then(json => setProducts(json))

      }, [])

      const images = product.images;

      setTimeout(() => counter === String(images).split(',').length - 1 ? setCounter(0) : setCounter(counter + 1), 5000)


      return (
            <div className='row row-cols-lg-2 row-cols-md-1 m-3 g-5 justify-content-center'>
                  <div className='col'>
                        <div className="overflow-hidden d-flex justify-content-center align-items-center" style={{ height: 300 }}>
                              <img alt='product-img' className='rounded-4 h-100' src={String(images).split(',')[counter]} />
                        </div>
                  </div>
                  <div className='col d-flex justify-content-center flex-column'>
                        <h1 className='display-4 fw-bold'>
                              {product.title}
                        </h1>
                        <h2 className='display-6 fs-1 my-2'>Price: {product.price} $</h2>
                        <button className="btn btn-lg btn-primary mt-3 w-100 d-block mx-auto">Buy Now</button>
                  </div>
                  <div className='col-lg-10'>
                        <h2 className='display-6 fs-2 my-2'>Brand: {product.brand}</h2>
                        <h2 className='display-6 fs-4 my-2 text-secondary'>Category: {product.category}</h2>
                        <h2 className='display-6 fs-4 text-info my-2'>Description: {product.description}</h2>
                        <h2 className='display-6 fs-5 text-secondary d-flex align-items-center my-2'>Rating: {product.rating} <span className='ms-1 text-warning'>&#9733;</span></h2>
                        <h2 className='display-6 fs-3 mt-5 text-center'>Now the left amount in our stock only <span className='text-primary'>{product.stock} item</span>, Hurry up and don't miss your chance to buy {product.title}</h2>

                  </div>
            </div>
      )
}
export default product;