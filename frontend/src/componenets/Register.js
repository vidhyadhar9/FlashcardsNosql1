//component to display  form when we click add card


import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FileUpload from './FileUpload'
import './Register.css'


function Register() {


//variable to navigate
let navigate=useNavigate();



// submistting the form
let {register,handleSubmit,formState:{errors}}=useForm();

    let submitForm=(userObj)=>{
        console.log(userObj) 
        fetch("http://localhost:3500/flashcard/post",{     //api to post the data
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(userObj)
        })
        .then(res=>res.json())
        .then(mess=>console.log(mess))
        .catch(err=>console.log(err))
        navigate('/Widgets');
    };



    return(
        <div className='container'>
        <div className="row bg-opacity-25 p-3">
        <div className="col-11 col-sm-8 col-md-6 mx-auto border shadow mt-5 p-3  ">
        <form onSubmit={handleSubmit(submitForm)} >
            *Question(front)
            <input type="text" id="question"  placeholder='Question' className='form-control mb-3' {...register("question",{required:true})}/>
            {errors.username?.type==="required"&&<p className='text-danger'> *user name is required</p>}
            *Answer (back)
            <input type="text" id="answer"  placeholder='Answer' className='form-control mb-3' {...register("answer",{required:true})}/>
            {errors.username?.type==="required"&&<p className='text-danger'> *user name is required</p>}

            <FileUpload/>

            {/* buttons to cancel or add cards */}
           <div className='add'> 

           {/* if cancel the adding card navigate to Home */}
            <div className=''><button className=" btn  border-primary" onClick={()=>navigate('/')}>cancel</button></div>

            {/* if Submitted Successfully navigate y=to widgets */}
            <div className=''><button className=" btn btn-primary px-4 " type='submit'>Add</button></div>
            </div>
        </form>
</div>
    </div>
    </div>
   
  )
}

export default Register;