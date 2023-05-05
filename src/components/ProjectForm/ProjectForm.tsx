import React from 'react';
import {useForm} from "react-hook-form";
import cl from "../TableForm/TableForm.module.css";
import MyInput from "../../UI/MyInput/MyInput";
import Button from "../../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../ducks/app/selectors";
import {addProject} from "../../ducks/app/actions";

interface ProjectFormProps {
    setVisible: (prop: boolean) => void;
}
const ProjectForm: React.FC<ProjectFormProps> = ({setVisible}) => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const user = useSelector(selectUser)

    const onSubmit = (data: any) => {
        console.log(data, user)
        dispatch(addProject({projectName: data.projectName, userId: user.id}))
        setVisible(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
            <MyInput register={register} label="projectName" autoComplete='off' required placeholder="Название проекта"/>
            <Button type="submit">Создать</Button>
        </form>
    );
};

export default ProjectForm;