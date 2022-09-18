const Input=(props)=>{
    const{Type,Label,Onchange,Value,Max,Min}=props
    return(
        <div className='mb-3'>
            <label>{Label}</label>
            <input value={Value} className='form-control' max={Max} min={Min} type={Type} onChange={Onchange}/>
        </div>
    )
}

export default Input;