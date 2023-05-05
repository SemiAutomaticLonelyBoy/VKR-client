import React from 'react';
import cl from './Navbar.module.css'
import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const logoutClickHandler = () => {
        window.localStorage.clear();
        navigate('/login')
    }

    return (
        <ul className={cl.container}>
            <div className={cl.info}>
                <li className={cl.content}><Link className={cl.link} to={'/tables'}>
                    Главная
                </Link></li>
                <li className={cl.content}></li>
            </div>
            <div className={cl.info}>
                <li className={cl.text}>123</li>
                <li className={cl.logout}><i onClick={logoutClickHandler} className={`gg-arrow-right-r ${cl.icon}`}></i></li>
            </div>
        </ul>
    );
};

export default Navbar;