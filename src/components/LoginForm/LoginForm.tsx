import React from 'react';
import { useForm } from "react-hook-form";
import MyInput from "../../UI/MyInput/MyInput";
import Button from "../../UI/Button/Button";
import cl from './LoginForm.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../ducks/app/actions";

const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogin = () => {
        navigate('/tables');
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        dispatch(login(data, onLogin));
    };

    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} className={cl.container}>
                <div className={cl.topic}>Авторизация</div>
                <MyInput register={register} label="email" autoComplete='off' required placeholder="Почта"/>
                <MyInput register={register} label="password" type='password' required placeholder="Пароль"/>
                <Link className={cl.link} to={'/registration'}>
                    <p>Регистрация</p>
                </Link>
                <Button type="submit">Войти</Button>
            </form>
        </div>
    );
};

export default LoginForm;