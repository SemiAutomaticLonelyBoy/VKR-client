import React from 'react';
import {useForm} from "react-hook-form";
import cl from "./RegistrationForm.module.css";
import MyInput from "../../UI/MyInput/MyInput";
import Button from "../../UI/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registration} from "../../ducks/app/actions";

const RegistrationForm = () => {
    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogin = () => {
        navigate('/login');
    };
    const onSubmit = (data: any) => {
        if (data.password === data.passwordConfirmation) {
            dispatch(registration(data, onLogin));
            // httpClient.post('/auth/registration', {
            //     email: data.email,
            //     password: data.password,
            //     userName: data.userName
            // }).then(() => navigate('/login'))
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={cl.container}>
                <div className={cl.topic}>Регистрация</div>
                <MyInput register={register} label="email" autoComplete='off' required placeholder="Почта"/>
                <MyInput register={register} label="userName" autoComplete='off' required
                         placeholder="Имя пользователя"/>
                <MyInput register={register} label="password" type='password' required placeholder="Пароль"/>
                <MyInput register={register} label="passwordConfirmation" required type='password'
                         placeholder="Повторите пароль"/>
                <Link className={cl.link} to={'/login'}>
                    <p>Авторизация</p>
                </Link>
                <Button type="submit">Регистрация</Button>
            </form>
        </div>
    );
};

export default RegistrationForm;