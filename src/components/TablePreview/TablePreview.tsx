import React from 'react';
import cl from './TablePreview.module.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTable} from "../../ducks/app/actions";

interface TablePreviewProps {
    name: string;
    tableName: string;
    projectId: string;
}
const TablePreview:React.FC<TablePreviewProps> = ({name, tableName, projectId}) => {

    const navigate= useNavigate()
    const dispatch = useDispatch();
    const clickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        // navigate(`/tables/${tableName}`)
        navigate(`/projects/${projectId}/tables/${tableName}`)
    }

    const deleteTableHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(deleteTable(tableName))
    }



    return (
        <div className={cl.container} >
            <div className={cl.name} onClick={clickHandler}>
                {name}
            </div>
            <div className={cl.icon} onClick={deleteTableHandler}>
                <DeleteOutlineIcon/>
            </div>
        </div>
    );
};

export default TablePreview;