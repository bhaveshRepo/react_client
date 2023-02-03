import '../assets/pages.css'

import { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Button } from '../components/Button'
import QuesInput from '../components/QuesInput'
import axios from 'axios'


function CreateQuestion() {

  const [data, setData] = useState([{
    option   : new Array(4).fill(""),
    answer   : "",
    question : "",
  }])

  function remove(key) {
    setData(data.filter((item, index) => index != key))
    console.log(data)
  }

  function sendData() {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    axios.post('http://localhost:9000/question/create', formData)
      .then(res => res.status == 200 ? alert(`here is your link :  ${res.data.data.link}`) : console.log("Something went wrong"))
      .catch(err => console.log(err))
  }

  return (
    <div className='parent-container'>
      <Navbar />
      <div className="child-container">
        {
          data.map((item, key) => (
            <div key={key}>
              <QuesInput
                index={key}
                data={data}
                setData={setData}
                remove={() => remove(key)}
              />
            </div>
          ))
        }
        <button  className='btn btn-sm btn-dark'  onClick={() => sendData()}>send</button>
      </div>
    </div>
  )
}

export default CreateQuestion
