import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Config from "../../config";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const FinalBill=()=>{
     const location=useLocation();
     const {bookingId} = location.state;
    //  const [bookingDetails,setBookDetails]=useState([]);
     const [customerDetails,setCustDetails]=useState([]);
     const [carDetails,setCarDetails]=useState([]);
     const [carCatDetails,setCarCatDetails]=useState([]);
     const [billDetails,setBillDetails]=useState([]);
     const [pickUpDetails,setPickUpDetails]=useState([]);
     const [dropDetails,setDropDetails]=useState([]);

     let CARID;
     let CARCATID;
     let PICKUPId;
     let DropID;

     const navigate=useNavigate();

     
//console.log( bookingId)
     useEffect(()=>{
        getBooking();
         getCutomer();
        
     },[bookingId])
 
     const getBooking=()=>{
         axios.get(Config.URL+"/customer/getbookingbyid/"+bookingId)
         .then((response)=>{
             const result=response.data;
             if(result!==null){

                //setBookDetails(response.data)
                CARID=response.data.carId.carId;
                PICKUPId=response.data.pickUpLocId;
                DropID=response.data.dropLocId;
                //console.log(response.data.carId.carId)
               // console.log("Inside getBooking")
               // console.log(bookingDetails)
                getCarDetails();
                getBill();
                getPickUpLoc();
                getDropLoc();

             }
         }).catch((e)=>{
            toast.error("get Booking Failed")
         })
     }

     const getCarDetails=()=>{
         //console.log(bookingDetails)
        axios.get(Config.URL+"/customer/getcarbyid/"+CARID).
        then((response)=>{
            const result=response.data;
            if(result!==null){
              setCarDetails(result)
              CARCATID =response.data.carCategoryId.carCategoryId
              // console.log("Inside getCarDetails")
               //console.log(result)
                getCarCatDetails();
            }
        }).catch((e)=>{
           toast.error("Car Details Failed")
        })
    }

    const getCarCatDetails=()=>{
        axios.get(Config.URL+"/customer/getcarcatbyid/"+CARCATID).
        then((response)=>{
            const result=response.data;
            if(result!==null){
                setCarCatDetails(result)
                //console.log("Inside getCarCat")
              // console.log(result)
            }
        }).catch((e)=>{
           toast.error("get Car cat Failed")
        })
    }


     const getCutomer=()=>{
        axios.get(Config.URL+"/customer/getcustomer/"+sessionStorage.token).
        then((response)=>{
            const result=response.data;
            if(result!==null){
               setCustDetails(result)
              // console.log("Inside getCust")
              // console.log(result)
            }
        }).catch((e)=>{
           toast.error("get cust Failed")
        })
    }

    const getBill=()=>{
        axios.get(Config.URL+"/admin/getbillbyid/"+bookingId).
        then((response)=>{
            const result=response.data;
            if(result!==null){
               setBillDetails(result)
              // console.log("Inside getBill")
              // console.log(result)
            }
        }).catch((e)=>{
           toast.error("get bill  Failed")
        })
    }

    const getPickUpLoc=()=>{
        axios.get(Config.URL+"/customer/getlocationbyid/"+PICKUPId).
        then((response)=>{
            const result=response.data;
            if(result!==null){
               setPickUpDetails(result)
              // console.log("Inside getPickUp")
              // console.log(result)
            }
        }).catch((e)=>{
           toast.error("pick up Failed")
        })
    }

    const getDropLoc=()=>{
        axios.get(Config.URL+"/customer/getlocationbyid/"+DropID).
        then((response)=>{
            const result=response.data;
            if(result!==null){
               setDropDetails(result)
              // console.log("Inside getDropLoc")
              // console.log(result)
            }
        }).catch((e)=>{
           toast.error("Drop Loc Failed")
        })
    }

    const submitCar=(bookId)=>{
        axios.put(Config.URL+"/customer/submitcar/"+bookId)
        .then((response)=>{
            const result=response.data;
           // console.log(result)
            if(result!==null){
                toast.success("Car Submitted")
                navigate("/");
            }
        }).catch((e)=>{
            toast.error("Failed To Submit")
            
        })
    }
    return(
        <div className="row">
            <div className="col-4" ></div>

            <div className="col-4" style={{border : "solid black",margin:10 }}>
                <h1 style={{textAlign:"center"}}>Bill</h1>
                <hr/>

                <p><b>Name :</b>{customerDetails.firstName + " "+ customerDetails.middleName + " " + customerDetails.lastName + "   "}         
                <b>Mobile :</b>{customerDetails.mobileNo + "   "}             
                <b>Email :</b> {customerDetails.email} </p>
                <div className="table-responsive">
                <table className="table ">
                    <thead>
                        <tr>
                       <th>Description</th>
                       <th></th>

                       <th></th>
                       <th></th>
                       <th></th>
                       <th></th>

                       <th></th>
                       <th>Details</th> 
                       </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>Car Name</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          <td>{carDetails.modelName}</td> 
                        </tr>

                        <tr>
                            <td>Car Type</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{carDetails.modelType}</td> 
                        </tr>
                        <tr>
                            <td>Driving License</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{customerDetails.drivingLic}</td> 
                        </tr>

                        <tr>
                            <td>Registration No</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{carDetails.registrationNo}</td> 
                        </tr>

                        <tr>
                            <td>Category</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{carCatDetails.carCategoryName}</td> 
                        </tr>
                        <tr>
                            <td>Seat</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{carCatDetails.seat}</td>
                        </tr>
                        <tr>
                            <td>Cost Per Day</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{carCatDetails.costPerDay}</td>
                        </tr>
                        <tr>
                            <td>Pick up Location</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{pickUpDetails.city + " " + pickUpDetails.locationName}</td>
                        </tr>

                        <tr>
                            <td>Drop Location</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{dropDetails.city + " " + dropDetails.locationName}</td>
                        </tr>

                        <tr>
                            <td>Billing Date</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{billDetails.billingDate }</td>
                        </tr>
                    
                    </tbody>
                </table>
                </div>
                
                <strong>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</strong>
                  <h2 style={{color:'red',textAlign:"center"}}>Late Fees : {billDetails.lateFees}</h2>


                 <div style={{margin:20}}>
                 <button onClick={()=>{submitCar(bookingId)}} className="btn btn-sm btn-success">Confirm Submit</button>

                 </div>
            </div>
            <div className="col-4"></div>
           

        </div>
      
    )
} 
export default FinalBill;