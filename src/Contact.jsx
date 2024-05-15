
import React,{useState} from 'react'
function Contact() {
    const [email,setEmail]=useState('')

    function handleChange(e){
        setEmail(e.target.value);
    }
    const handleSubmit=async()=>{

    }
  return (
    <div className='flex flex-col items-center justify-center'>
       <p> CONTACT US </p>
       <p>Leave your E-mail with us for further quries.</p>
       <input className='border-solid border-2 border-white-600' value={email} onChange={handleChange} placeholder='                E-Mail' />
       <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Contact