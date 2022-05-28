import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import '../../../../Utils/QuestionSwitch/QuestionSwitch'
import { getAnswerCheck } from '../../../../action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Home/Product/Loader/Loader'

const FillBlanks = ({ queston1, stae1, filterTheQuestins }, ref) => {
  const [studentAnswer, setStudentAnswer] = useState('')
  let params = useParams()
  const dispatch = useDispatch()
  const { error, loading, answerCheck, loginUser } = useSelector(
    state => (state.mark, state.logiUser)
  )
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
  }, [error])

  const callReducer = () => {
    dispatch(
      getAnswerCheck(
        studentAnswer,
        params.mark,
        stae1,
        loginUser._id,
        queston1._id
      )
    )
    filterTheQuestins(queston1._id)
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className='question1'>
            <div className='question3'>
              <h4 className='question2'>Q &nbsp; {queston1.question}</h4>
              <h4 className='mark'>
                Mark For These Question: &nbsp;{params.mark}
              </h4>
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
              <div className='button-box'>
                <button className='twelve' onClick={callReducer}>
                  Submit Answer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FillBlanks
