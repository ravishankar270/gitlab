import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { login } from '../../../store/actions/authAction'

function FormComponent({sup}) {
  const auth=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  const logIn=()=>{
     dispatch(login())
  
  }
  useEffect(()=>{
    if(auth === true || localStorage.getItem('token')){
      navigate('/')
    }
  },[auth])
  
  return (
    <div style={{width:'60%',margin:'10px'}}>
    <div className='box' >
    {sup?
    <h3>New User? Create an account</h3>:
      <h3>Existing User? Sign in</h3>

    }
      {sup?
      <>
      <input className='form-control' type='text' name='name' placeholder='Name'/>
      <input className='form-control' type='text' name='username' placeholder='Username'/>
      </>:<></>
        }
      <input className='form-control' type='email' name='email' placeholder='Email'/>
      <input className='form-control' type='password' name='password' placeholder='Password'/>
      <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
        {sup?<></>:
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label style={{fontSize:'13px'}} class="form-check-label" for="flexCheckDefault">
          Remember Me
        </label>

      </div>
    }
      {sup?<></>:
      <a style={{fontSize:'13px'}}>Forgot your password?</a>
        }
      </div>
      <button className='btn btn-success' onClick={()=>
        logIn()
      }>
        {sup?'Sign Up':'Sign In'}
        </button>
    </div>
  </div>
  )
}

export default FormComponent