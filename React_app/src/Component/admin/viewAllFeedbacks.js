import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Config from "../../config";
import { toast } from "react-toastify";


const ViewFeedBacks=()=>{

    const navigate=useNavigate();
    const [feedBacks,setFeedBAcks]=useState([]);

    useEffect(()=>{
        getAllFeedBacks();
    },[])

    const getAllFeedBacks=()=>{
        axios.get(Config.URL+"/admin/getallfeedbacks")
        .then((response)=>{
            const result=response.data;
            if(result!=null){
                setFeedBAcks(result)
                console.log(result);
            }
        }).catch((e)=>{
            toast.error("No Feedback Available!!")
        })
    }

    return(
        <div className="container">
            <h3 style={{textAlign:"center",color:"blue",margin:20}}>FeedBack List</h3>
            <hr/>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Booking Id</th>
                    <th>Customer Id</th>
                    <th>Feedback</th>
                    <th>Rating</th>
                    <th>Reply</th>
                </tr>
                </thead>
                <tbody>
                    {feedBacks.map((feedback)=>{
                        return(
                            <tr>
                                <td>{feedback.bookingId.bookingId}</td>
                                <td>{feedback.custId.custId}</td>
                                <td>{feedback.message}</td>
                                <td>{feedback.rating}</td>
                                <td>{feedback.reply}</td>
                                <td><button onClick={()=>{navigate("/admin/replyFeedback",{state:{bookingId:feedback.bookingId.bookingId,custId:feedback.custId.custId}})}} className="btn btn-sm btn-primary">Reply</button></td>

                            </tr>
                        )
                    })}

                </tbody>
                
            </table>


        </div>
    )
}
export default ViewFeedBacks;