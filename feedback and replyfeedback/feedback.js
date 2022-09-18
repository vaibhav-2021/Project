import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Config from '../../config'
import { toast } from 'react-toastify'
import Input from '../Input'

//  message | rating |booking_id | cust_id
const Addfeedback = () => {
  const [message, setmessage] = useState('')
  const [rating, setrating] = useState('')

  const addfeed = () => {
    const body = {
      message,
      rating,
    }

    axios
      .post(Config.URL + 'customer/addfeedback', body)
      .then((response) => {
        const result = response.data
        if (result !== null) {
          toast.success('feedback Added')
        } else {
          toast.error('feedback failed')
        }
      })
      .catch((e) => {
        console.log(e)
        toast.error('feedback failed')
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
          Label='massage'
          Onchange={(e) => {
            setmessage(e.target.value)
          }}
        />
        <Input
          Label='rating'
          Onchange={(e) => {
            setrating(e.target.value)
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
