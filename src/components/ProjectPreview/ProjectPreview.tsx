import React from 'react';
import cl from "../TablePreview/TablePreview.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteProject, deleteTable} from "../../ducks/app/actions";

interface ProjectPreviewProps {
    projectName : string
}
const ProjectPreview: React.FC<ProjectPreviewProps> = ({projectName}) => {

    const navigate= useNavigate()
    const dispatch = useDispatch();
    const clickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate(`/projects/${projectName}`)
    }

    const deleteTableHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(deleteProject(projectName))
    }

    return (
        <div className={cl.container} >
            <div className={cl.name} onClick={clickHandler}>
                {projectName}
            </div>
            <div className={cl.icon} onClick={deleteTableHandler}>
                <DeleteOutlineIcon/>
            </div>
        </div>
    );
};

export default ProjectPreview;