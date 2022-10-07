import React from 'react'
import { NavLink } from "react-router-dom";


function header() {
  return (
    <>
      <nav className='navbar navbar-light bg-light shadow container-fluid p-3'>
        <div className="container justify-content-be">
          <div className='logo'>
            <NavLink to="/" className="text-decoration-none text-dark fw-bold" >
              Online Store
            </NavLink>
          </div>
          <div className='row row-cols-3 w-50 justify-content-center align-items-center gx-5 nav nav-pills'>
            <div className='col'>
              <NavLink to='/home' className="nav-link text-center" activeclassname="active">
                Home Page
              </NavLink>
            </div>

            <div className='col'>
              <NavLink to='/products' className="nav-link text-center" activeclassname="active">
                Products
              </NavLink>
            </div>

            <div className='col'>
              <NavLink to='/add-product' className="nav-link text-center" activeclassname="active">
                Add products
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default header