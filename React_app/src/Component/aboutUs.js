import React from 'react'
import { Link } from 'react-router-dom'
 import Yash from "../Component/img/Yash.jpg"
 import Vaibhav from "../Component/img/Vaibhav.jpeg"
 import shahbaj_photo from "../Component/img/shahbaj_photo.jpg"

import Amol from "../Component/img/Amol.jpeg"


const Aboutus = () => {

  return (
    <div style={{ backgroundColor: 'gainsboro' }}>
      <h1 style={{ textAlign: 'center' }}> About us</h1>
      <div className='container' style={{ paddingTop: 50, paddingBottom: 50 }}>
      In order to facilitate users to rent a car as and when required we would like to design a car rental system. As It is more feasible than owning a car and maintaining it. Car rental system serves people those who do not own their own car, or owners of damaged or destroyed vehicles who are awaiting repair or insurance compensation or travellers who are out of town also It is more convenient to search and book car on rent online without  going anywhere 
        <br />
        <br />
        <br />
        <h3>Why us</h3>
        <ol style={{listStyle:"none"}}>
            <li>If you want to book directly through a supplier, and not through a broker – choose Renaissance Rent A Car</li>
            <li>vehicle make and model will be confirmed, and not “similar” to those you selected;</li>
            <li>this will give you better flexibility in terms of vehicle choices</li>
            <li> you can directly negotiate some of the terms and conditions, payment options, especially if you require unique or long term rental service;</li>
            <li> you can book “commission free”;</li>
            <li> you can reach us 24/7 on our mobile numbers;</li>
            <li> you can call us free from the “Free call” service on our website;</li>
        </ol>
    
        <h6>Affordable prices.</h6>
        Book the cars at affordable prices.
        <br />
        <h6>Good Car Conditions.</h6>
        Get the cars with good conditions.
        <br />
        <h6>Book Easily</h6>
    	 Reduces the effort of booking a car in a conventional procedure.
        <br />
        <h6>Easy Searching.</h6>
     	 Eases the search process of a customer who is in need of a car.
        <br />
        <h6>Customer Satisfaction.</h6>
        	To provide services to the customers in order to achieve the best customer satisfaction.
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: 'center' }}>Team</h1>
        <div className='row text-center'>
          <div className='col-xl-3 col-sm-6 mb-5'>
            <div className='bg-white rounded shadow-sm py-5 px-4'>
              <img
                src={shahbaj_photo}
                alt=''
                width='100'
                className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
              />
              <h5 className='mb-0'>Shahbaj Tamboli</h5>
              <span className='small text-uppercase text-muted'>CEO - Founder</span>
            </div>
          </div>

          <div className='col-xl-3 col-sm-6 mb-5'>
            <div className='bg-white rounded shadow-sm py-5 px-4'>
              <img
                src={Vaibhav}
                alt=''
                width='100'
                className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
              />
              <h5 className='mb-0'>Vaibhav Jadhav</h5>
              <span className='small text-uppercase text-muted'>CEO - Founder</span>
            </div>
          </div>

          <div className='col-xl-3 col-sm-6 mb-5'>
            <div className='bg-white rounded shadow-sm py-5 px-4'>
              <img
                src={Amol}
                alt=''
                width='100'
                className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
              />
              <h5 className='mb-0'>Amol Totre</h5>
              <span className='small text-uppercase text-muted'>CEO - Founder</span>
            </div>
          </div>

          <div className='col-xl-3 col-sm-6 mb-5'>
            <div className='bg-white rounded shadow-sm py-5 px-4'>
              <img
                src={Yash}
                alt=''
                width='100'
                className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
              />
              <h5 className='mb-0'>Yash Gupta</h5>
              <span className='small text-uppercase text-muted'>CEO - Founder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Aboutus
