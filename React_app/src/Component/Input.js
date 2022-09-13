const Input=(props)=>{
    const{Type,Label,Onchange}=props
    return(
        <div className='mb-3'>
            <label>{Label}</label>
            <input className='form-control' type={Type} onChange={Onchange}/>
        </div>
    )
}

export default Input;