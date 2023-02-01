import '../assets/pages.css'
import { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Button } from '../components/Button'
import QuesInput from '../components/QuesInput'


function App() {
  const [count, setCount] = useState([0]);

  const [data, setData] = useState([{
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: 0,
  }])

  function remove(key) {

    setData(data.filter((item, index) => index != key))
    setCount(count.filter((item, index) => index != key))
    console.log(data)
  }



  return (
    <div className='parent-container'>
      <Navbar />
      <div className="child-container">
        {
          count.map((item, key) => (
            <div key={key}>
              <QuesInput
                index={key}
                data={data}
                setData={setData}
                remove={() => remove(key)}
                add={() => setCount([...count, count.length])}
              />
            </div>
          ))
        }
        <button onClick={() => console.log(data)}>send</button>
      </div>
    </div>
  )
}

export default App
