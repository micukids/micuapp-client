import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
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
     <div className='container p-4 mt-5 main-height'>
        <div className="row">
          <div className="col-md-4 mx-auto">

    <div className='card card-body shadow-lg d-flex flex-column justify-items-center'>
        <h2 className='mb-3 mt-3 text-center'>REGISTRATE</h2>   
         
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

            <div className='d-grid col-6 mx-auto'>
                    <Button variant="primary" type="submit" className='btn btn-dark btn-block'>
                    Regístrate
                    </Button>

            </div>
        </Form>
         <hr width="100%" size="1px" />
        <p className='text-center'>¿Ya tienes una cuenta? <Link to="/login"><span>Iniciar sesión</span></Link></p>
    </div>
    </div>
    </div>
    </div>
  );
}

export default RegisterForm;