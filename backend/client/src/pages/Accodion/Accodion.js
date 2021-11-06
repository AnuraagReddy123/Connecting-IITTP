import React,{useState} from 'react';
import {questions} from './api';
import "./accodion.css";
import Myaccodion from './Myaccodion';

const Accodion = () =>{
    const [data, setData] = useState(questions);  
    return (
        <>
            <section className = "main-div">
                <h1 > FAQ </h1>
            {
                data.map((curElem) => {
                    const {id} = curElem;
                    return <Myaccodion key={ id} {...curElem}/>
                })
            }
            </section>
        </>
    )
}

export default Accodion