import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




function products() {


      const [productsAPI, setProductsAPI] = useState([])
      const [productsLocal, setProductsLocal] = useState([])
      const [products, setProducts] = useState([])


      useEffect(() => {
            fetch('https://dummyjson.com/products')
                  .then(res => res.json())
                  .then(json => setProductsAPI(json.products))

      }, [productsAPI.length])

      useEffect(() => {
            localStorage.getItem('products') && setProductsLocal(JSON.parse(localStorage.getItem('products')))
      }, [productsLocal.length])

      const allProducts = productsLocal.concat(productsAPI)

      useEffect(() => {
            if (allProducts.length > 0) setProducts(allProducts)
      }, [allProducts.length])


      return (
            <>
                  <div className='row row-cols-3 my-5 gy-5'>
                        {products && products.map((product, index) => {
                              const images = String(product.images).split(',')
                              return (
                                    <div className='col d-flex justify-content-center align-items-center' key={index}>
                                          <Link to={'/product/' + product.id} className='text-decoration-none text-dark'>
                                                <div className="card border-0 hover text-start overflow-hidden" style={{ height: 400, width: 300 }}>
                                                      <div className="overflow-hidden d-flex justify-content-center align-items-center" style={{ height: 200 }}>
                                                            <img className="card-img-top" src={images[images.length - 1]} alt="img" style={{ height: 120 + '%', width: 'auto' }} />
                                                      </div>
                                                      <div className="card-body">
                                                            <h4 className="card-title">{product.title}</h4>
                                                            <p className="card-text fs-6">{product.description}</p>
                                                      </div>
                                                </div>
                                          </Link>
                                    </div>
                              )
                        })}
                  </div>
            </>
      )
}
export default products;