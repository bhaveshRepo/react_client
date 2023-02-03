import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Question from '../components/Question'

const QuestionBank = ({ params }) => {

  let { id } = useParams()
  const [data, setData] = useState([])
  const [answer, setAnswer] = useState([])
  const [userAnswer, setUserAnswer] = useState([])
  const [showResult, setShowResult] = useState(false)

  function getData(id) {
    axios.get(`http://localhost:9000/question/${id}`)
      .then(res => {
        if (res.status == 200) {
          setData(res.data.data.result)
          let answer = []
          res.data.data.result.map((item) => {
            answer.push(item.answer)
          })
          setAnswer(answer)
          setUserAnswer(new Array(res.data.data.result.length).fill(""))
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (id) {
      getData(id)
    }
  }, [])

  const checkAnswer = () => {
    console.log({answer, userAnswer})
    let validation = userAnswer.every(item => item !== '')
    setShowResult(validation)
  }

  return (
    <div className='parent-container'>
      <Navbar />
      <div className="container">

        <div className="child-container">
          {
            data.map((item, index) => (
              <div key={index} >
                <Question
                  index={index}
                  question={item.question}
                  option={[item.optionA, item.optionB, item.optionC, item.optionD]}
                  userAnswer={userAnswer}
                  setUserAnswer={setUserAnswer}
                  answer={answer}
                  showResult={showResult}
                />
              </div>
            ))
          }
          <button className='btn btn-sm btn-dark' onClick={checkAnswer}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionBank