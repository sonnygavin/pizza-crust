import React from 'react'
import '../BestSeller/BestSeller.css'

function BestSeller() {
  return (
    <div className='best-seller'>
        <div className="container px-40 py-16">
            <h3 className='font-bold'>Best Selling Food</h3>
            <p>Right now, these food are the best selling among our customers. For this reason, we are offering you an extra discount on them.</p>
            <div className="best-selling-products flex flex-row text-black">
                <div className="best-seller-1 basis-1/4 text-center bg-white m-10 border">Product 1</div>
                <div className="best-seller-2 basis-1/4 text-center bg-white m-10 border">Product 2</div>
                <div className="best-seller-3 basis-1/2 bg-white m-10 border">Product 3</div>
            </div>
        </div>
    </div>
  )
}

export default BestSeller
