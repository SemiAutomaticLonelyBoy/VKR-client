import React from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import {useForm} from "react-hook-form";
import Button from "../../UI/Button/Button";
import cl from './AddValueForm.module.css'
import {httpClient} from "../../services/http";
import {useParams} from "react-router-dom";
import {getType} from "../../utils/utils";
interface AddValueFormProps {
    meta: [column_name: string,  data_type:string];
    setVisible: (prop: boolean) => void;
}
const AddValueForm:React.FC<AddValueFormProps> = ({meta, setVisible}) => {
    const params = useParams();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        httpClient.post(`/tables/${params.name}`, {projectId: params.project, data: data})
        setVisible(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
            {meta.map((m:any) => (
                <div key={m.column_name} className={cl.container}>
                    <div className={cl.title}>{m.column_name} : {m.data_type}</div>
                    <MyInput register={register} type={getType(m.data_type)} label={m.column_name} autoComplete='off' required placeholder="Значение"/>
                </div>
            ))}
            <Button type="submit">Добавить</Button>
        </form>
    );
};

export default AddValueForm;