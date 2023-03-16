import React from 'react'
import Layout from '../../components/layout/Layout'
import LoginForm from '../../components/login/LoginForm'


function LoginPage() {
  return (
    <div className='bg-container-access'>
        <Layout>
            <div>
                <LoginForm/>

            </div>
        </Layout>
    </div>
  )
}

export default LoginPage