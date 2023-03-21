import React from 'react'
import Layout from '../../components/layout/Layout'
import LoginForm from '../../components/login/LoginForm'


function ParentsPage() {
  return (
    <div className='bg-parents'>
        <Layout>
            <div>
                <LoginForm/>

            </div>
        </Layout>
    </div>
  )
}

export default ParentsPage