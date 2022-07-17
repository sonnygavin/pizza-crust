import React from 'react'
import RightImage from '../OrderNow/assets/pizza-crust-bike-delivery.jpg'

function OrderNow() {
  return (
    <div className='order-now pt-5'>
        <div className="container flex flex-row">
            <div className="left-text">
                <p>Fastest 🚀<br />Food Delivery<br />In Your Country</p>
                <button>Order now</button>
                <p>Order process</p>
                <p>Thanks Pizza Crust for your service! 😍</p>
                <p>Anyway, delivery service was fast so far! Keep it up! 🥰</p>
                <p>Abdul Khaleque</p>
            </div>
            <div className="right-img">
                <img src={RightImage} alt="Pizza Crust Delivery Guy" width='250' height='300' />
            </div>
        </div>
    </div>
  )
}

export default OrderNow