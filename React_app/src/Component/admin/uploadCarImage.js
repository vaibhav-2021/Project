import { useState } from "react";
import axios from "axios";
import Config from "../../config";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const UploadCarImage=()=>{
    const [file,setFile]=useState();
    const location=useLocation();
    const navigate=useNavigate();

    const {carId}=location.state;

    const uploadImage=()=>{
        const body=new FormData();
    body.set('imageFile',file);

    axios.post(Config.URL+"/"+carId+"/image",body,{
        'Content-Type':'multipart/form-data'
    }).then((response)=>{
        const result=response.data;
        if(result!==null){
            toast.success("Image Added");
            navigate("/admin/viewallcars")
        }
    })
    }

    return(
        <div style={{margin:"auto"}}>
            <h1 style={{color:"blue"}}>Upload Image</h1>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
            <button onClick={uploadImage} className="btn btn-primary" >Upload</button>

        </div>
    )
}
export default UploadCarImage;