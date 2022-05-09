import React, { useRef,useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../layouts/frontend/Navbar';
import './Login.css';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Adduser(){
    
    const history = useHistory();

    const[adduserInput,setAdduser]=useState({
        name: "",
        email: "",
        password: "",
        error_list: [],
    });

    
    const handleInput= (e) => {
        e.persist();
        setAdduser({...adduserInput,[e.target.name]: e.target.value});

    }
    const adduserSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: adduserInput.name,
            email: adduserInput.email,
            password: adduserInput.password,
            
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/adduser', data).then(res =>{
                if(res.data.status === 200)
                {
                     localStorage.setItem('auth_token',res.data.token);
                     localStorage.setItem('auth_name',res.data.username);
                     swal("Success",res.data.message,"success");
                     history.push('/');
                }
                else 
                {
                    setAdduser({...adduserInput, error_list: res.data.validation_errors  });
                }
         });
        });
    }

    return (
        <div>
            <Navbar/>
           <div className="container py-5">
               <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add New user</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={adduserSubmit}>
                                    <div className="form-group mb-3">
                                        <label >Full Name </label>
                                        <input 
                                        type="" 
                                        name="name" 
                                        value={adduserInput.name}
                                        onChange={handleInput}
                                        className="form-control" 
                                        />
                                        <span>{adduserInput.error_list.name} </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label >Email </label>
                                        <input 
                                        type="" 
                                        name="email" 
                                        value={adduserInput.email}
                                        onChange={handleInput}
                                        className="form-control" 
                                        />
                                        <span>{adduserInput.error_list.email} </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label >Password </label>
                                        <input 
                                        type="" 
                                        name="password" 
                                        value={adduserInput.password}
                                        onChange={handleInput}
                                        className="form-control" 
                                        /> 
                                        <span>{adduserInput.error_list.password} </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">ADD</button>
                                    </div>
                                </form>
                            </div>
                           
                        </div>      
                    </div>
               </div>

           </div>
        </div>
    );
}
export default Adduser;