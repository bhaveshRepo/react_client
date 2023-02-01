import QuesInput from '../components/QuesInputamrit'
import { Button } from '../components/Button'
import { useRef, useState } from 'react'
import '../assets/pages.css'
import Navbar from '../components/Navbar'
import Input from '../components/Input'


function App() {
  const [count, setCount] = useState([0])
  const [list, setList] = useState([]);


  function remove(key) {
    console.log(key)
    console.log(list)
    console.log(list[key])
    // setList(list.filter((item, index) => index != key))
    // setCount(count.filter((item, index) => index != key))
    // console.log(list)
  }



  return (
    <div className='parent-container'>
      {console.log(count)}
      <Navbar />
      <div className="child-container">
        {
          count.map((item, key) => (
            <div key={key}>
              <QuesInput
                list={list}
                setList={setList}
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
