import React from 'react';
import cl from './Card.module.css'

interface CardProps  {
    table: string | undefined;
    method: string;
    path: string;
    children: React.ReactNode;
    response?: any;


}
const Card: React.FC<CardProps> = ({children, table, method, path, response}) => {
    console.log(response)


    return (
        <div className={cl.card}>
            <div className={cl.title}>/{method}</div>
            <hr/>
            <div className={cl.path}>{path}</div>
            <div className={cl.form}>
                {children}
            </div>

            {response?.data?.toString() === undefined
                ?  <></> :
                <div>
                    status: {response?.status}
                    <div  className={cl.response}>
                        {response?.data?.map((t:any)=> (
                            <div key={t.id}>
                                {JSON.stringify(t)}
                            </div>
                        ))}
                     </div>
                </div>

            }
        </div>
    );
};

export default Card;