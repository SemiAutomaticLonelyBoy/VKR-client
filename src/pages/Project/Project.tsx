import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import cl from './Project.module.css'
import {httpClient} from "../../services/http";
import Button from "../../UI/Button/Button";
import MyModal from "../../UI/Modal/MyModal";
import TableForm from "../../components/TableForm/TableForm";
import TablePreview from "../../components/TablePreview/TablePreview";
import {fetchUser} from "../../ducks/app/actions";
import {useDispatch} from "react-redux";

const Project = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const [project, setProject] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        httpClient.get(`/projects/${params.name}`).then((data:any) => setProject(data.data)).then(()=> setLoading(false))
        dispatch(fetchUser());
    }, [])

    const openModalHandler = (e:React.MouseEvent) => {
        e.preventDefault()
        setVisible(true)
    }

    if(loading) {
        return <>
            <Navbar/>
            loading
        </>
    }

    console.log(project)

    return (
        <>
            <Navbar/>
            <MyModal visible={visible} setVisible={setVisible}>
                <TableForm setVisible={setVisible} projectId={project.id}/>
            </MyModal>
            <div className={cl.container}>
                <div className={cl.title}>{params.name}</div>
                <div className={cl.key}>Ключ: {project.key}</div>
                <div className={cl.key}>Приватный: {project.isPrivate ? <>Да</> : <>Нет</>}</div>
                <Button onClick={openModalHandler}>Создать таблицу</Button>
                {project.tables.map((table: any) => (
                    <div key={table.id}>
                        <TablePreview projectId={project.id} name={table.name} tableName={table.tableName}/>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Project;