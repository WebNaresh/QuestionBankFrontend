import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import '../../../Utils/QuestionSwitch/QuestionSwitch'

const FillBlanks = ({
  inputAnswer,
  queston1,
  answer,
  setAnswer,
  userAnswer
}) => {
  const [studentAnswer, setStudentAnswer] = useState('')
  // console.log(typeof inputAnswer)
  // console.log(setAnswer)
  console.log(queston1)
  let params = useParams()
  return (
    <div>
      <div className='question1'>
        <div className='question3'>
          <h4 className='question2'>Q &nbsp; {queston1.question}</h4>
          <h4 className='mark'>Mark For These Question: &nbsp;{params.mark}</h4>
        </div>
        <div className='question4'>
          <div className='question5'>
            <input
              value={studentAnswer}
              className='input2'
              spellCheck='false'
              onChange={e => setStudentAnswer(e.target.value)}
              placeholder='Enter Your Answer Here'
              autoComplete={'off'}
              required={true}
              type='text'
            />
            <abbr title='Dont Afraid of Case Sensativeness'>
              <FontAwesomeIcon
                icon={faCircleInfo}
                className={' cp fa-circle-info'}
              ></FontAwesomeIcon>
            </abbr>
          </div>
          <div className='question6'>
            <button className='button1 cp'>SKIP</button>
            <button className='button1 cp'>Solved It Later</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FillBlanks
