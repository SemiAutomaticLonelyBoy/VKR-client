import React from 'react';
import cl from "../Login/Login.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const Registration = () => {
    return (
        <div className={cl.container}>
            <div className={cl.box}>
                <RegistrationForm/>
            </div>
        </div>
    );
};

export default Registration;