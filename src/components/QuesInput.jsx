import React, { useState } from 'react'
import { Button } from './Button'
import '../assets/components.css'
import Input from './Input'



const QuesInput = ({ add, remove, list, setList }) => {

    const [data, setData] = useState({
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: 0,
    })

    function create() {
        setList([...list, data])
        add()
    }


    return (
        <div className="card w-100 my-2">
            <div className="card-body">
                <div>
                    <Input
                        value={data.question}
                        onChange={(e) => setData(data => ({ ...data, question: e.target.value }))}
                        placeholder={"enter your question ....."}
                    />
                </div>
                <br></br>
                <div className="row">
                    <div className="col-2">
                        <Input
                            value={data.options}
                            onChange={(e) => setData(data => ({ ...data, optionA: e.target.value }))}
                            placeholder={"Option A"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.options}
                            onChange={(e) => setData(data => ({ ...data, optionB: e.target.value }))}
                            placeholder={"Option B"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.options}
                            onChange={(e) => setData(data => ({ ...data, optionC: e.target.value }))}
                            placeholder={"Option C"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.options}
                            onChange={(e) => setData(data => ({ ...data, optionD: e.target.value }))}
                            placeholder={"Option D"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.answer}
                            onChange={(e) => setData(data => ({ ...data, answer: e.target.value }))}
                            placeholder={"Answer"}
                        />
                    </div>
                    <div className="col-2 align-self-end ">
                        <button className="btn btn-primary me-2" onClick={create}>Add More</button>
                        <button className="btn btn-primary" onClick={remove}>Remove</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuesInput