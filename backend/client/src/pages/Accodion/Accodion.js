import React,{useState} from 'react';
import {questions} from './api';
import "./accodion.css";
import Myaccodion from './Myaccodion';

const Accodion = () =>{
    const [data, setData] = useState(questions);  
    return (
        <div className="accordian">
            <section className = "main-block accMainBlock">
                <h1 classname="faqheading"> FAQ </h1>
            {
                data.map((curElem) => {
                    const {id} = curElem;
                    return <Myaccodion key={ id} {...curElem}/>
                })
            }
            </section>
        </div>
    )
}

export default Accodion