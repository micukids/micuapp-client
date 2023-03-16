import React from 'react'
import LoginForm from '../../components/login/LoginForm'
import RegisterForm from '../../components/register/RegisterForm'
import Layout from "../../components/layout/Layout";

const SignInPage = () => {
  return (
    <div>
      <Layout>
        <div className="d-flex flex-row-reverse justify-content-center align-content-center gap-5 customSize">
          <RegisterForm/>
          <LoginForm/>
        </div>
      </Layout>
   
    </div>
  )
}

export default SignInPage
