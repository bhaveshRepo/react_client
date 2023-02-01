import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import '../assets/components.css'
import Input from './Input'



const QuesInput = ({ add, remove, data, i, setData }) => {

    const [index, setIndex] = useState(i)

    useEffect(() => {
        setIndex(i);
    }, [i])

    return (
        <div className="card w-100 my-2">
            <div className="card-body">
                <div>
                    <Input
                        value={data.question}
                        onChange={(e) => setData([{ ...data[index], question: e.target.value }])}
                        placeholder={"enter your question ....."}
                    />
                </div>
                <br></br>
                <div className="row">
                    <div className="col-2">
                        <Input
                            value={data.optiona}
                            onChange={(e) => setData([{ ...data[index], optiona: e.target.value }])}
                            placeholder={"Option A"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.optionb}
                            onChange={(e) => setData([{ ...data[index], optionb: e.target.value }])}
                            placeholder={"Option B"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.optionc}
                            onChange={(e) => setData([{ ...data[index], optionc: e.target.value }])}
                            placeholder={"Option C"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.optiond}
                            onChange={(e) => setData([{ ...data[index], optiond: e.target.value }])}
                            placeholder={"Option D"}
                        />
                    </div>
                    <div className="col-2">
                        <Input
                            value={data.answer}
                            onChange={(e) => setData([{ ...data[index], answer: e.target.value }])}
                            placeholder={"Answer"}
                        />
                    </div>
                    <div className="col-2 align-self-end ">remove
                        <button className="btn btn-primary me-2" onClick={add}>Add More</button>
                        <button className="btn btn-primary" onClick={remove}>Remove</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuesInput