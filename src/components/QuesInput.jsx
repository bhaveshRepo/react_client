import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import '../assets/components.css'
import Input from './Input'



const QuesInput = ({ add, remove, data, setData, index }) => {

    const changeValue = () => {
        setData([...data,
        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            answer: 0,
        }
        ])

        add()
    }

    return (
        <div className="card w-100 my-2">
            <div className="card-body">
                <div>
                    <Input
                        value={data[index]?.question}
                        onChange={(e) => (
                            setData([...data.map((item, key) => key == index ? { ...item, question: e.target.value } : item)])
                        )}
                        placeholder={"enter your question ....."}
                    />
                </div>
                <br></br>
                <div className="row">
                    <div className="col-2">
                        <Input
                            value={data[index]?.optionA}
                            onChange={(e) => {
                                setData([...data.map((item, key) => key == index ? { ...item, optionA: e.target.value } : item)])
                            }}

                            placeholder={"Option A"}
                        />
                    </div>
                    {/* <div className="col-2">
                        <Input
                            value={data.options}
                            onChange={(e) => setData(data => ({ ...data[0], optionB: e.target.value }))}
                            placeholder={"Option B"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.options}
                            onChange={(e) => setData(data => ({ ...data[0], optionC: e.target.value }))}
                            placeholder={"Option C"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.options}
                            onChange={(e) => setData(data => ({ ...data[0], optionD: e.target.value }))}
                            placeholder={"Option D"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.answer}
                            onChange={(e) => setData(data => ({ ...data[0], answer: e.target.value }))}
                            placeholder={"Answer"}
                        />
                    </div> */}
                    <div className="col-2 align-self-end ">
                        <button className="btn btn-primary" onClick={changeValue}>Add More</button>
                        <button className="btn btn-primary" onClick={remove}>Remove</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuesInput