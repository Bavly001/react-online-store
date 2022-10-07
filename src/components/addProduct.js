import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function addProduct() {

      let productsLocal = [];
      const [isAdded, setIsAdded] = useState(false)
      const { register, handleSubmit, reset } = useForm();  

      if (localStorage.getItem('products')) productsLocal = JSON.parse(localStorage.getItem('products'));


      const [inputList, setInputList] = useState([]);

      const Input = () => (<input type="text" {...register(`images.${inputList.length + 1}`)} className="form-control mb-3 image-link" />)

      const addLink = () => {
            setInputList(inputList.concat(<Input key={inputList.length} />));
      }

      return (
            <div className='container w-50'>
                  <form className='was-validated' onSubmit={handleSubmit((data) => {
                        productsLocal.push(data);
                        localStorage.setItem('products', JSON.stringify(productsLocal));
                        setIsAdded(true);
                        setInterval(() => {
                              setIsAdded(false);
                        }, 3000);
                        reset();
                  })}>
                        <h1 className='display-4 mb-5 pb-2 border-2 border-bottom'>Add Product</h1>
                        <div className="mb-3">
                              <label className="form-label">Product Name</label>
                              <input type="text" {...register("title")}
                                    className="form-control" required />
                        </div>
                        <div className="mb-3">
                              <label className="form-label">Product Description</label>
                              <input type="text" {...register("description")}
                                    className="form-control" required />
                        </div>
                        <div className="mb-3">
                              <label className="form-label">Product Price</label>
                              <input type="number" {...register("price")}
                                    className="form-control" required />
                        </div>
                        <div className="mb-3">
                              <label className="form-label">Product Brand</label>
                              <input type="text" {...register("brand")}
                                    className="form-control" required />
                        </div>
                        <div className="mb-3">
                              <label className="form-label">Product Category</label>
                              <input type="text" {...register("category")}
                                    className="form-control" required />
                        </div>
                        <div className="mb-3">
                              <label className="form-label">Product Rate</label>
                              <input type="number" {...register("rate")}
                                    className="form-control" required />
                        </div>
                        <div className="mb-3">
                              <label className="form-label">Product Stock</label>
                              <input type="number" {...register("stock")}
                                    className="form-control" required />
                        </div>
                        <div className="mb-3">
                              <label className="form-label">Product Images Links</label>
                              <input type="text"
                                    className="form-control mb-3 image-link" {...register("images.0")} required />
                              {inputList}
                              <small>At least add one image link</small>
                              <button className="btn btn-secondary btn-sm ms-5" onClick={addLink}>add more images</button>
                        </div>
                        <button type="submit" className="btn btn-primary my-3 w-100">Submit</button>
                        <div className={isAdded ? 'd-block alert alert-success' : 'd-none'}>Product is added successfully</div>
                  </form>
            </div>
      )
}
export default addProduct;