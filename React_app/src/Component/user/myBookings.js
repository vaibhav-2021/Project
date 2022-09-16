import { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../config";
import { toast } from "react-toastify";


const MyBookings=()=>{
    const [bookings,setBookings]=useState([]);
    const [location,setLocation]=useState("");
    let dropLocIds=[];
    let dropLocationName=[];

    useEffect(()=>{
        getCurrentBookings();
    },[location])


    const getCurrentBookings=()=>{
        axios.get(Config.URL+"/customer/getcurrentbookings/"+sessionStorage.token)
        .then((response)=>{
            const result=response.data;
            if(result!=null){
                setBookings(result)
                console.log(result);
            }
        }).catch((e)=>{
            <h4 style={{color:"red"}}>No Booking Available!!</h4>
        })
    }

    const getDropLoc=(id)=>{
        axios.get(Config.URL+"/customer/getlocationbyid/"+id)
        .then((response)=>{
            const result=response.data;
            if(result!=null){
                setLocation(result)
                console.log(result);
                return result.locationName
            }
        }).catch((e)=>{
            toast.error("No Loc")
        })
    }

   
    return(
        <div className="container">
            {/* <div className="col-4"></div> */}
            <div >
                <table className="table ">
                    <thead>
                        <tr>
                             <th>Booking Id</th>
                             <th>Customer Name</th>
                             <th>Car Name</th>
                             <th>Registration No</th>
                             <th>Car Category Name</th>
                             <th>pickUp Date</th>
                             <th>return Date</th>
                             <th>Pickup Location</th>
                             <th>Drop Location</th>
                             <th>Booking Status</th>
                             <th>Billing Date</th>
                             <th>Late Fees</th>
                             <th>Total Amount</th>
                             <th>Billing Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {bookings.map((booking) => {
                return (
              <tr key={booking.bookingId}>
                <td>{booking.bookingId}</td>
                <td>{booking.customerId.firstName +" " + booking.customerId.lastName}</td>
                <td>{booking.carId.modelName}</td>
                <td>{booking.carId.registrationNo}</td>
                <td>{booking.carId.carCategoryId.carCategoryName}</td>
                <td>{booking.pickUpDate}</td>
                 <td>{booking.returnDate}</td> 
                {/* <td>{}</td> */}
                <td>{booking.carId.locationId.city + " - " + booking.carId.locationId.locationName}</td> 
                {/* <td>{dropLocationName}</td>  */}
                <td>{booking.bookingStatus}</td>
                {/*<td>{billing.billingDate}</td>
                <td>{billing.lateFees}</td>
                <td>{billing.totalAmount}</td>
                <td>{billing.billingStatus}</td> */} 
              </tr>
            );
          })}
                            
                        
                    </tbody>
                </table>
            </div>
            
            
        </div>
    )
}
export default MyBookings;