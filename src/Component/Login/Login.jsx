import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

 const [show, setShow]=useState(false)

  const { signIn}=useContext(AuthContext)
// Redairec onno page 
  const navigate=useNavigate()
    const location=useLocation()
  console.log(location);

      const form =location.state?.from?.pathname || '/';

        //  user info get
       const handleLogin=(event)=>{
        event.preventDefault();
        const from= event.target;
        const email=from.email.value;
        const password=from.password.value;
        console.log(email, password);


        signIn(email , password)
        .then(result=>{
          const logedUser=result.user;
          console.log(logedUser);
          from.reset()

          navigate(form , {replace :true})
        })
        .catch(error=>{
           console.log(error);
        })
    }
    

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? "text": "password"} name='password' placeholder="password" className="input input-bordered" required />
               <p onClick={()=>setShow(!show)}> 
                  <small>
                    {
                    show ? <span> Hiden Password</span>:  <span> Show Password</span>
                    }
                    </small>
              
               </p>
               
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p> New to Amazon  ?   <Link className='btn-link pl-5 ' to="/signup"> Sign Up</Link>  </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;