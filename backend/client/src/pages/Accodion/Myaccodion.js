import React, {useState} from 'react'

const Myaccodion = ({question, answer}) => {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className ="main-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                            <h2 className="plusMinus" onClick = { () => setShow(!show)}> {show? '-' :'+'} </h2>
                        </div>
                        <div className="col-md-11">
                            <p className="faqQue">{question}</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
            { show && <p className="answers">{answer}</p> }
        </>
    )
}
export default Myaccodion;