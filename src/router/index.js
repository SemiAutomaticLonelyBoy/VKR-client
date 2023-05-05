import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Table from "../pages/Table/Table";
import Project from "../pages/Project/Project";

export const privateRoutes = [
    {path: '/projects', element: <Home/>},
    {path: '/projects/:project/tables/:name', element: <Table/>},
    {path: '/projects/:name', element: <Project/>}
];

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/registration', element: <Registration/>}
];