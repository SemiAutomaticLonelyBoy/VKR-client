import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {useParams} from "react-router-dom";
import {httpClient} from "../../services/http";
import Button from "../../UI/Button/Button";
import MyModal from "../../UI/Modal/MyModal";
import AddValueForm from "../../components/AddValueForm/AddValueForm";
import Card from "../../components/Card/Card";
import MyInput from "../../UI/MyInput/MyInput";
import {useForm} from "react-hook-form";
import cl from "../../components/AddValueForm/AddValueForm.module.css";
import {getType} from "../../utils/utils";

const Table = () => {
    const params = useParams();
    const { register: registerGet, handleSubmit:  handleSubmitGet} = useForm();
    const { register: registerGetById, handleSubmit: handleSubmitGetById } = useForm();
    const { register: registerDelete, handleSubmit: handleSubmitDelete } = useForm();
    const { register: registerPut, handleSubmit: handleSubmitPut } = useForm();
    // const { register, handleSubmit } = useForm();

    const [loading, setLoading] = useState<boolean>(true)
    const [visible, setVisible] = useState(false)
    const [meta, setMeta] = useState<[] | any>([])

    const [getResponse, setGetResponse] = useState<any>({})
    const [getByIdResponse, setGetByIdResponse] = useState<any>({})

    useEffect(()=>{
        httpClient.get(`/tables/${params.name}/meta`).then((data:any) => setMeta(data.data)).then(()=>setLoading(false))
    }, [])

    const openModalHandler = (e:any) => {
        e.preventDefault()
        setVisible(true)
    }

    const onSubmitGet = (data: any) => {
        httpClient.get(`/tables/${params.name}?limit=${data.limit}&page=${data.page}`).then((data:any) => setGetResponse(data))
    }

    const onSubmitGetById = (data: any) => {
        if (data.getId === '') {
            setGetByIdResponse([])
        }   else {
            httpClient.get(`/tables/${params.name}/${data.id}`).then((data:any) => setGetByIdResponse(data))
        }

    }

    const onSubmitPutById = (data: any) => {
        httpClient.put(`/tables/${params.name}/${data.id}`,)
    }

    const onSubmitDeleteById = (data: any) => {
        console.log(data)
        httpClient.delete(`/tables/${params.name}/${data.id}`)
    }


    if (loading) {
        return <>
            loading
        </>
    }


    return (
        <>
            <MyModal visible={visible} setVisible={setVisible}>
                <AddValueForm meta={meta} setVisible={setVisible}/>
            </MyModal>
            <Navbar/>
            {/*<Button onClick={openModalHandler}>Добавить</Button>*/}

            <Card table={params.name} method={'GET'} path={'path :url/tables/' + params.name + '/{?page,limit}'} response={getResponse}>
                <form onSubmit={handleSubmitGet(onSubmitGet)} >
                    <MyInput register={registerGet} label="page" autoComplete='off' type='number' placeholder="page?"/>
                    <MyInput register={registerGet} label="limit" autoComplete='off' type='number' placeholder="limit?"/>
                    <Button>Выполнить</Button>
                </form>
            </Card>
            <Card table={params.name} method={'GET/:id'} path={'path :url/tables/' + params.name + '/:id'} response={getByIdResponse}>
                <form onSubmit={handleSubmitGetById(onSubmitGetById)} >
                    <MyInput register={registerGetById} label="id" required autoComplete='off' type='number' placeholder="id"/>
                    <Button >Выполнить</Button>
                </form>
            </Card>
            <Card table={params.name} method={'POST'} path={'path :url/tables/' + params.name} >
                <Button onClick={openModalHandler}>Добавить</Button>
            </Card>
            <Card table={params.name} method={'PUT/:id'} path={'path :url/tables/' + params.name + '/:id'}>
                <form onSubmit={handleSubmitPut(onSubmitPutById)} >
                    <MyInput register={registerPut} label="id"  autoComplete='off' type='number' placeholder="id"/>
                    {meta.map((m:any) => (
                        <div key={m.column_name} className={cl.container}>
                            <div className={cl.title}>{m.column_name} : {m.data_type}</div>
                            <MyInput register={registerPut} type={getType(m.data_type)} label={m.column_name} autoComplete='off' required placeholder="Значение"/>
                        </div>
                    ))}
                    <Button >Выполнить</Button>
                </form>
            </Card>
            <Card table={params.name} method={'DELETE/:id'} path={'path :url/tables/' + params.name + '/:id'} >
                <form onSubmit={handleSubmitDelete(onSubmitDeleteById)} >
                    <MyInput register={registerDelete} label="id" required autoComplete='off' type='number' placeholder="id"/>
                    <Button >Выполнить</Button>
                </form>
            </Card>
        </>
    );
};

export default Table;