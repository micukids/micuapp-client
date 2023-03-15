import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { getAxiosInstance } from '../../services/functions';
//import swal from 'sweetalert';

function LoginForm() {
    const instance = getAxiosInstance();
    const navigate = useNavigate();
    const [loginInput, setLoginInput] = useState({
        email: '',
        password:'',
        error_list:[],
    })

    const handleInput = (e) => {
        e.persist();
        setLoginInput({...loginInput,[e.target.name]:e.target.value})
    }
    
    const logInSubmit = (e) =>{
        e.preventDefault();

    const data = {
        email: loginInput.email,
        password: loginInput.password,
    }

    instance.get('/sanctum/csrf-cookie').then(response => {
    instance.post('/api/login',data).then(res => {
            if(res.data.status === 200)
        {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_name', res.data.name);
            swal("Success",res.data.message,"success");
            navigate('/');
        }
        else if(res.data.status === 401)
        {
            swal("Warning",res.data.message,"warning")
        }else{
            setLoginInput({...loginInput, error_list: res.data.validation_errors});
        }

        })
    })


    }
    
    return (
    <div>
        <div className='d-flex flex-column align-items-center justify-items-center'>
            <h2 className='mb-3 mt-3'>Ingresa</h2>   
            
            <Form onSubmit={logInSubmit}>    
                <Form.Group className="mb-3" controlId="formBasicEmailLogin">
                    <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    onChange={handleInput}
                    value={loginInput.email}
                    name = 'email'
                    />
                <span>{loginInput.error_list.email}</span>  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasswordLogin">
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={handleInput}
                    value={loginInput.password}
                    name = 'password'
                    />
                <span>{loginInput.error_list.password}</span>     
                </Form.Group>

            <Button variant="primary" type="submit">
            Ingresar
            </Button>
            </Form>
        </div>
    </div>
  )
}

export default LoginForm