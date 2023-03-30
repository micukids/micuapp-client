import React from 'react'
import RegisterForm from '../../components/register/RegisterForm'
import Layout from "../../components/layout/Layout";

const SignInPage = () => {
  return (
    <div className='bg-container-access'>
      <Layout>
        <div>
          <RegisterForm/>
        </div>
      </Layout>
   
    </div>
  )
}

export default SignInPage
