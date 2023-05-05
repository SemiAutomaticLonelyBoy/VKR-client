import React from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import cl from './Login.module.css'

const Login = () => {
    return (
        <div className={cl.container}>
            <div className={cl.box}>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;