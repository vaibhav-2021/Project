import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Config from '../../config'
import { toast } from 'react-toastify'
import Input from '../Input'
import { useLocation, useNavigate } from 'react-router-dom'

//  message | rating |booking_id | cust_id
const Replyfeedback = () => {
    const navigate=useNavigate();
  const [reply, setreply] = useState('')
  const location=useLocation();
  const {bookingId}=location.state;
  const {custId}=location.state;
  console.log(bookingId)
  console.log(custId)


  const addreply = () => {
    const body = {
      reply,
    }
    axios
      .put(Config.URL + '/admin/replyfeedback/'+custId+"/"+bookingId, body)
      .then((response) => {
        const result = response.data
        if (result !== null) {
          toast.success('feedback reply Added')
          navigate("/admin/ViewAllFeedbacks");
        } else {
          toast.error('feedback reply failed')
        }
      })
      .catch((e) => {
        console.log(e)
        toast.error('feedback reply failed')
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
        Reply feedback
      </h2>

      <div className='col'>
        <Input
          Label='Reply'
          Onchange={(e) => {
            setreply(e.target.value)
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
          onClick={addreply}>
          Reply feedback
        </button>
      </div>
    </div>
  )
}

export default Replyfeedback