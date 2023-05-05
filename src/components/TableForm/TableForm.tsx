import React, { useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import Button from "../../UI/Button/Button";
import {useForm} from "react-hook-form";
import cl from './TableForm.module.css'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Select from "../../UI/Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../ducks/app/selectors";
import {addTable} from "../../ducks/app/actions";

interface TableFormProps {
    setVisible: (prop: boolean) => void;
    projectId: number
}

const TableForm: React.FC<TableFormProps> = ({setVisible, projectId}) => {
    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm();

    const [inputs, setInputs] = useState<Array<{ id: number }>>([])

    const user = useSelector(selectUser)

    const onSubmit = (data: any) => {
        let preColumns = []
        let columns = []

        for (const [key, value] of Object.entries(data)) {
            if (key !== 'tableName') {
                preColumns.push(value)
            }
        }
        console.log(user)

        for (let i = 0; i < preColumns.length; i += 2) {
            const object = {type: preColumns[i], label: preColumns[i + 1]}
            columns.push(object)
        }

        dispatch(addTable({name: data.tableName, userName: user.userName, columns: columns, projectId: projectId}))
        setVisible(false);
    }

    const onDeleteItem = (id: string) => {
        setInputs((prevState: any) => prevState.filter((t: any) => {
                if (t.id !== id) {
                    return t
                }
                return false
            }
        ))
    }

    const addInputHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        setInputs((prevState: any) => [...prevState, {id: Date.now().toString()}])
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
            <MyInput register={register} label="tableName" autoComplete='off' required placeholder="Имя таблицы"/>
            {inputs.map((input: any) => (
                <div key={input.id} className={cl.container}>
                    <MyInput register={register} label={'label ' + input.id} autoComplete='off' required
                             placeholder="Значение"/>
                    <Select {...register('type ' + input.id)}/>
                    <div onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        onDeleteItem(input.id);
                    }} className={cl.box}><CloseIcon fontSize={'large'}/></div>
                </div>

            ))}
            <button onClick={addInputHandler} className={cl.btn}><AddIcon fontSize={'medium'}/>Добавить</button>
            <Button type="submit">Создать</Button>
        </form>
    );
};

export default TableForm;