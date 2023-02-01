import QuesInput from '../components/QuesInputamrit'
import { Button } from '../components/Button'
import { useRef, useState } from 'react'
import '../assets/pages.css'
import Navbar from '../components/Navbar'
import Input from '../components/Input'


function App() {

  const [data, setData] = useState([{
    question: "",
    optiona: "",
    optionb: "",
    optionc: "",
    optiond: "",
    answer: ""
  }])

  function add() {
    setData([...data, {
      question: "",
      optiona: "",
      optionb: "",
      optionc: "",
      optiond: "",
      answer: ""
    }])
  }

  console.log(data);
  return (
    <div className='parent-container'>
      <Navbar />
      <div className="child-container">
        {data?.map((item, key) => {
          let i = key
          return (
            <div key={key}>
              <QuesInput
                i={i}
                data={data}
                add={add}
                setData={setData}
              />
            </div>
          )
        })}

        <button onClick={() => console.log(data)}>send</button>
      </div>
    </div>
  )
}

export default App
