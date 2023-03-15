import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { getAxiosInstance } from '../../services/functions';

function RegisterForm() {

    const instance = getAxiosInstance();
    const navigate = useNavigate();
    const [registerInput, setRegisterInput] = useState({
        name:'',
        parent:'',
        email:'',
        password:'',
        error_list:[],
    });

    const handleInput = (e) =>{
        e.persist();
        setRegisterInput({...registerInput,[e.target.name]:e.target.value});
    }

    const registerSubmit = (e) => { 
        e.preventDefault();

        const data = {
            name: registerInput.name,
            parent: registerInput.parent,
            email: registerInput.email,
            password: registerInput.password,
        }

        instance.get('/sanctum/csrf-cookie').then(response => {
            instance.post('/api/register', data).then(res => {
                if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.name);
                swal("Success",res.data.message,"success");
                navigate('/');
            }
            else
            {
                setRegisterInput({...registerInput, error_list: res.data.validation_errors});
            }

                })
        })

    }

  return (
    <div className='d-flex flex-column align-items-center justify-items-center'>
        <h2 className='mb-3 mt-3'>Regístrate</h2>   
         
        <Form onSubmit={registerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control 
                type="text" 
                placeholder="Nombre del peque" 
                onChange={handleInput}
                value={registerInput.name}
                name = 'name'
                />
            </Form.Group>
            <span>{registerInput.error_list.name}</span>    
            <Form.Group className="mb-3" controlId="formBasicParent">
                <Form.Control 
                type="text" 
                placeholder="Responsable" 
                onChange={handleInput}
                value={registerInput.parent}
                name = 'parent'
                />
            <span>{registerInput.error_list.parent}</span>   
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                type="email" 
                placeholder="Email" 
                onChange={handleInput}
                value={registerInput.email}
                name = 'email'
                />
            <span>{registerInput.error_list.email}</span> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange={handleInput}
                value={registerInput.password}
                name = 'password'
                />
            <span>{registerInput.error_list.password}</span>   
            </Form.Group>


        <Button variant="primary" type="submit">
        Comenzar
        </Button>
        </Form>
    </div>
  );
}

export default RegisterForm;