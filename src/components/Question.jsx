import React, { useState } from 'react'
import Input from './Input'
import "./questions.css"

const Question = ({ question, option, userAnswer, setUserAnswer, index, answer, showResult }) => {

    const [checked, setChecked] = useState()

    return (
        <div className="card my-2">
            <div className="card-body d-flex flex-column align-items-center">
                <div className=' '>
                    <p className="font-monospace fs-3">{question}</p>
                </div>
                <br></br>

                <div className="row d-flex w-100 justify-content-center">
                    {option.map((item, i) => (
                        <div key={i} className="col-2">
                            <div className="form-check question" >
                                <input
                                    id={`flexCheckDefault${index}${i}`}
                                    className="form-check-input"
                                    type="radio"
                                    value={i}
                                    disabled={showResult}
                                    style={showResult ?  checked == i ? answer[index] == userAnswer[index] ?  { backgroundColor: 'green' } : { backgroundColor: 'red'} : { } : {}}
                                    checked={checked == i}
                                    onChange={(e) => {
                                        setChecked(e.target.value)
                                        setUserAnswer([...userAnswer.map((element, key) => key == index ? element = e.target.value : element)])
                                    }}
                                />
                                <label className="form-check-label " htmlFor={`flexCheckDefault${index}${i}`} style={{cursor: 'pointer'}}> {item} </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Question