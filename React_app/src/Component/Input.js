const Input=(props)=>{
    const{Type,Label,Onchange,Value}=props
    return(
        <div className='mb-3'>
            <label>{Label}</label>
            <input value={Value} className='form-control' type={Type} onChange={Onchange}/>
        </div>
    )
}

export default Input;