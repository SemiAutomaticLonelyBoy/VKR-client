import React, {useEffect, useState} from 'react';
import cl from './Home.module.css'
import Button from "../../UI/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import MyModal from "../../UI/Modal/MyModal";
import TableForm from "../../components/TableForm/TableForm";
import TablePreview from "../../components/TablePreview/TablePreview";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, selectUserLoading} from "../../ducks/app/selectors";
import {fetchUser} from "../../ducks/app/actions";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";

const Home = () => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        dispatch(fetchUser());
    }, [visible, dispatch])
    const openModalHandler = (e:React.MouseEvent) => {
        e.preventDefault()
        setVisible(true)
    }
    const user = useSelector(selectUser);
    const loading = useSelector(selectUserLoading);

    if (loading || !user) {
        return <>
            loading
        </>
    }
    console.log(user)

    return (
        <div className={cl.container}>
            <MyModal visible={visible} setVisible={setVisible}>
                <ProjectForm setVisible={setVisible}/>
            </MyModal>
            <Navbar/>
            <div className={cl.box}>
                <Button onClick={openModalHandler}>Добавить</Button>
                {user.projects.map((project: any) => (
                    <div key={project.id}>
                        <ProjectPreview projectName={project.projectName}/>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Home;