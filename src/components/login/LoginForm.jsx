import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { getAxiosInstance } from "../../services/functions";

function LoginForm() {
  const instance = getAxiosInstance();
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const logInSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    instance.get("/sanctum/csrf-cookie").then((response) => {
      instance.post("/api/login", data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          swal("Success", res.data.message, "success");
          res.data.role === "admin" ? navigate("/admin") : navigate("/");
        } else if (res.data.status === 401) {
          swal("Warning", res.data.message, "warning");
        } else {
          setLoginInput({
            ...loginInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <div className="container p-4 mt-5 main-height">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card card-body shadow-lg d-flex flex-column  justify-items-center">
            <h2 className="mb-3 mt-3 text-center">LOGIN</h2>

            <Form onSubmit={logInSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmailLogin">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleInput}
                  value={loginInput.email}
                  name="email"
                />
                <span>{loginInput.error_list.email}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPasswordLogin">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleInput}
                  value={loginInput.password}
                  name="password"
                />
                <span>{loginInput.error_list.password}</span>
              </Form.Group>
              <div className="d-grid col-6 mx-auto">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-dark btn-block"
                >
                  Login
                </Button>
              </div>
            </Form>
            <hr width="100%" size="1px" />
            <p className="text-center">
              ¿No tienes una cuenta?{" "}
              <Link to="/signin">
                <span>Registrate</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
