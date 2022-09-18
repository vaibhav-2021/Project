
import { useState, useEffect } from "react"
import Input from "../Input"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Config from "../../config"

const Update=()=>{
    const [drivingLic,setDrivLic]=useState('')
    const [firstName,setFname]=useState('')
    const [lastName,setLname]=useState('')
    const [middleName,setMname]=useState('')
    const [mobileNo,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [city,setCity]=useState('')
    const [district,setDist]=useState('')
    const [pincode,setPin]=useState('')
    const [state,setState]=useState('')
    const custId=sessionStorage.token;

    useEffect(()=>{
        getCustomer();
    },[])

    const getCustomer=(()=>{
        axios.get(Config.URL+"/customer/getcustomer/"+custId).
        then((response)=>{
            const result=response.data;
            if(result!==null){
                console.log(result)
                setFname(result.firstName);
                setMname(result.middleName);
                setLname(result.lastName);
                setMobile(result.mobileNo);
                setEmail(result.email);
                setPin(result.pincode);
                setState(result.state);
                setDrivLic(result.drivingLic);
                setCity(result.city);
                setDist(result.district);
            }
        })
    })

    const update=(id)=>{
        const body={
            drivingLic,
            firstName,
            lastName,
            middleName,
            mobileNo,
            email,
            city,
            pincode,
            state,
            district,
        }
        axios.put(Config.URL+"/customer/update/"+id,body)
        .then((response)=>{
            const result=response.data;
            toast.success("Profile Updated")
        }
        ).catch((e)=>{
            console.log(e);
            toast.error("Update Fail");
        })
    }

    return(
        <div className='row'>
            <h2 style={{color:'blue',textAlign:'center',margin:20}}>Update</h2>
            <div className='col-4'>
                <Input  Value={firstName} Label='First Name' Onchange={(e)=>setFname(e.target.value)}/>
                <Input Value={lastName} Label='Last Name' Onchange={(e)=>setLname(e.target.value)}/>
                <Input  Value={middleName} Label='Middle Name' Onchange={(e)=>setMname(e.target.value)}/>
                <Input  Value={email} Label='Email' Type='email' Onchange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='col-4'>
               
                <Input  Value={mobileNo} Label='Mobile' Onchange={(e)=>setMobile(e.target.value)}/>
                <Input  Value={city} Label='City' Onchange={(e)=>setCity(e.target.value)}/>
                <Input  Value={district} Label='District' Onchange={(e)=>setDist(e.target.value)}/>
                 
                <button style={{backgroundColor:'blue',border:'none',borderRadius:5,color:'white',}} onClick={()=>{update(custId)}} >Save</button>
                
            </div>
            <div className='col-4'>
                <Input  Value={pincode} Label='Pincode' Onchange={(e)=>setPin(e.target.value)}/>
                <Input  Value={drivingLic} Label='Driving Lic' Onchange={(e)=>setDrivLic(e.target.value)}/>
                <Input  Value={state} Label='State' Onchange={(e)=>setState(e.target.value)}/>
            </div>
           
           </div>
    )
}
export default Update;