import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import '../assets/components.css'
import Input from './Input'



const QuesInput = ({ remove, data, setData, index }) => {

    const add = () => {
        setData([...data, {
            question: "",
            option: new Array(4).fill(""),
            answer: "",
        }])
    }

    const insertValue = (event, column, i = null) => {
        setData(
            [...data.map((item, key) => key == index
                ? column == "option"
                    ? { ...item, [column]: [...item[column].map((single, key) => key == i ? single = event.target.value : single)] }
                    : { ...item, [column]: event.target.value }
                : item)])
    }

    return (
        <div className="card w-100 my-2">
            <div className="card-body">
                <div>
                    <Input
                        value={data[index]?.question}
                        onChange={(event) => insertValue(event, 'question')}
                        placeholder={"enter your question ....."}
                    />
                </div>
                <br></br>
                <div className="row">
                    {data[index]?.option.map((item, i) => (
                        <div key={i} className="col-2">
                            <Input
                                value={item}
                                onChange={(event) => insertValue(event, "option", i)}
                                placeholder={`option ${i + 1}`}
                            />
                        </div>
                    ))}
                    <div className="col-2">
                        <select className="form-select" onChange={(event) => insertValue(event, "answer")} value={data[index]?.answer}>
                            <option value={""}>Select answer</option>
                            {
                                data[index].option.map((item, key) =>
                                    (<option key={key} value={key}>{item}</option>))
                            }
                        </select>
                    </div>
                    <div className="col-2 align-self-end ">
                        {data.length == 1 || index == data.length - 1
                        ? <button className="btn btn-dark me-2" onClick={add}>Add More</button>  : null
                        }
                        {   data.length != 1 ?
                                <button className="btn btn-danger" onClick={remove}>Remove</button> : null
                        }
                </div>
            </div>
        </div>
        </div >
    )
}

export default QuesInput