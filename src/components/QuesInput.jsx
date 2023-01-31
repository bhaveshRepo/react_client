import React from 'react'
import './component.css'

const QuesInput = ({ }) => {
    return (
        <div className='quesinput-container'>
            <input style={{ width: '100%'}} type={'text'} placeholder={'question'} />
            <div>
                <input type={'text'} placeholder={'1'} />
                <input type={'text'} placeholder={'2'} />
            </div>
            <div>
                <input type={'text'} placeholder={'3'} />
                <input type={'text'} placeholder={'4'} />
            </div>
        </div>
    )
}

export default QuesInput