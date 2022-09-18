import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Config from '../../config'
import { toast } from 'react-toastify'
import Input from '../Input'
import { useLocation } from 'react-router-dom'



//  message | rating |booking_id | cust_id
const Addfeedback = () => {
  const [message, setmessage] = useState('')
  const [rating, setrating] = useState('')
  const location=useLocation();
  const {bookingId}=location.state;

  const addfeed = () => {
    const body = {
      message,
      rating,
    }

    axios
      .post(Config.URL + '/customer/addfeedback/'+sessionStorage.token+"/"+bookingId, body)
      .then((response) => {
        const result = response.data
        if (result !== null) {
          toast.success('feedback Added')
        } else {
          toast.error('feedback failed')
        }
      })
      .catch((e) => {
        // console.log(e)
        toast.error('feedback Already Added')
      })
  }

  return (
    <div
      className='row'
      style={{
        margin: 'auto',
        height: 350,
        width: '50%',
        marginTop: 50,
        boxShadow: '1px 1px 20px 5px gray',
      }}>
      <h2 style={{ color: 'blue', textAlign: 'center', margin: 20 }}>
        Add feedback
      </h2>
      <div className='col'>
        <Input
          Label='Message'
          Onchange={(e) => {
            setmessage(e.target.value)
          }}
        />
        <Input Type="number"
        Max="5" Min="1"
          Label='Rating'
          Onchange={(e) => {
              if(e.target.value>=1 && e.target.value<=5 ){setrating(e.target.value)}
            
          }}
        />

      </div>
      <div className=''>
        <button
          style={{
            backgroundColor: 'blue',
            border: 'none',
            borderRadius: 5,
            color: 'white',
            width: 100,
          }}
          onClick={addfeed}>
          Add feedback
        </button>
      </div>
    </div>
  )
}

export default Addfeedback