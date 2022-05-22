import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../../Utils/MetaData'
import { getQuestion } from '../../action/productAction'
import { useAlert } from 'react-alert'
import Loader from '../Home/Product/Loader/Loader'
import { useParams } from 'react-router-dom'
import './QuestionPaper.css'
import FillBlanks from './questionFolder/FillBlanks'

const QuestionPaper = () => {
  let params = useParams()
  const alert = useAlert()
  const [answer, setAnswer] = useState([{ answer: '' }])
  const dispatch = useDispatch()
  const { questions, error, loading } = useSelector(state => state.questions)
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getQuestion(params.code, params.id))
  }, [dispatch, error, alert, params.id, params.code])

  const handleok = e => {
    e.preventDefault()
  }

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <form name='verify' onSubmit={handleok}>
            <MetaData title='Build QUESTION PAPER' />
            <div>
              <h4 className='question7'>Q &nbsp; {params.id}</h4>
            </div>

            {(() => {
              switch (params.id) {
                case 'Fill in the blanks':
                  return (
                    <>
                      {questions &&
                        questions.map(questions => (
                          <FillBlanks
                            key={questions._id}
                            queston1={questions}
                            answer={questions.answers[0].answer}
                            userAnswer={answer}
                            setAnswer={setAnswer}
                          />
                        ))}
                    </>
                  )

                case 'State whether True or False':
                  return (
                    <>
                      <div className='div'></div>
                    </>
                  )
                case 'Multiple choice question with single correct answer':
                  return (
                    <>
                      <div className='div'></div>
                    </>
                  )
                case 'Multiple choice question with TWO correct answers':
                  return (
                    <>
                      <div className='div'></div>
                    </>
                  )
                case 'Multiple choice question with Three correct answer':
                  return (
                    <>
                      <div className='div'></div>
                    </>
                  )
                case 'Match the following':
                  return (
                    <>
                      <div className='div'></div>
                    </>
                  )
                case 'Answer the following(Any5)':
                  return (
                    <>
                      <div className='div'></div>
                    </>
                  )
                default:
                  return <div>You are Not User.</div>
              }
            })()}
            <button type='submit' className='submit button1 cp'>
              Submit
            </button>
          </form>

          {}
        </>
      )}
    </>
  )
}

export default QuestionPaper
