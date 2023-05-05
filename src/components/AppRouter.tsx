import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<PrivateRoutes/>}>
                {privateRoutes.map((route): any =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Navigate to="/projects"/>}/>
            </Route>
            {publicRoutes.map((route): any =>
                <Route
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
            )}
            <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
    );
};

export default AppRouter;