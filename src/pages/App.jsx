import '../assets/pages.css'

import { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Button } from '../components/Button'
import QuesInput from '../components/QuesInput'
import axios from 'axios'


function App() {
  const [count, setCount] = useState([0]);
  const [uniqueCode, setUniqueCode] = useState();

  const [data, setData] = useState([{
    question: "",
    option: new Array(4).fill(""),
    answer: "",
  }])

  function remove(key) {
    setData(data.filter((item, index) => index != key))
    console.log(data)
  }

  function sendData() {
    setData(data.filter((item, index) => item.question != ""))

    const formData = new FormData();
    formData.append("data", JSON.stringify(data))

    axios.post('http://localhost:9000/question/create', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
      .then(res => {
        console.log(res)
        if (res.status == 200) {
          location.replace(res.data.data.link)
        }
      })
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
        <button onClick={() => sendData()}>send</button>
      </div>
    </div>
  )
}

export default App
