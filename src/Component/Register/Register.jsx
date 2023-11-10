import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider'

const Register = () => {
  const [show, setShow]=useState(false) 
 const [error, setError]=useState('')
 const { creatUser}=useContext(AuthContext)
 const navigate=useNavigate()
 console.log(creatUser);
     
        const handleSubmit=(event)=>{
                event.preventDefault()

                const from=event.target;
                const name=from.name.value;
                const email=from.email.value;
                const password=from.password.value
                const confirm=from.confirm.value
                 console.log(name , email, password, confirm);
                 setError('');


                //  if(password !== confirm) {
                //    setError("Your Password did not match")
                //    return
                //    } 
                //    else if (password.length < 6){
                //        setError("Minimum Password 6 Carecters use")
                //        return
                //    }  
                //    else{
                //        setError("Your are Success fuly register")
                //        return                 
                //    }  
                


            creatUser(email, password)
            .then(result=>{
              const logedUser=result.user;
              console.log(logedUser);
              from.reset()
              navigate('/')
            })
            .catch(error=>{
               console.log(error);
            })
       
    
        }
 
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center w-[400px] lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-2">Provident cupiditate voluptatem et in. </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                
                <p onClick={()=>setShow(!show)}> 
                  <small>
                    {
                    show ? <span> Hiden Password</span>:  <span> Show Password</span>
                    }
                    </small>
              
               </p>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Cofirm Password</span>
                </label>
                <input type="password" name="confirm" placeholder="Confirm password" className="input input-bordered" required />
              </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p> Alredy have an Account?   <Link className='btn-link pl-5 ' to="/login"> Login</Link>  </p>
            </form>

          </div>
           <p className=' text-red-600'> {error}</p>
        </div>
      </div>
    );
};

export default Register;