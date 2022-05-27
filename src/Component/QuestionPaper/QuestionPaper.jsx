import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../../Utils/MetaData'
import { getQuestion } from '../../action/productAction'
import { useAlert } from 'react-alert'
import Loader from '../Home/Product/Loader/Loader'
import { useParams, useLocation } from 'react-router-dom'
import './QuestionPaper.css'
import FillBlanks from './questionFolder/FillBlanks'
import { clearErrors } from '../../action/userAction'

const QuestionPaper = () => {
  let params = useParams()
  const alert = useAlert()
  const { state } = useLocation()
  const dispatch = useDispatch()
  const { questions, error, loading } = useSelector(state => state.questions)
  const [questionSet1, setQuestionSet1] = useState(questions ? questions : '')
  const filterTheQuestins = id => {
    const filterset = questionSet1.filter(e => e._id !== id)
    setQuestionSet1(filterset)
  }
  console.log(questionSet1)
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getQuestion(params.code, params.id))
  }, [dispatch, error, alert, params.id, params.code])
  console.log(questionSet1.length)

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <MetaData title='Build QUESTION PAPER' />
          {questionSet1.length === 0 ? (
            <div className='noSoGood'>
              <h4>You Have Completed This Section</h4>
            </div>
          ) : (
            <div>
              <h4 className='question7'>Q &nbsp; {params.id}</h4>
            </div>
          )}

          {(() => {
            switch (params.id) {
              case 'Fill in the blanks':
                return (
                  <>
                    {questionSet1 &&
                      questions.map(questions => (
                        <FillBlanks
                          key={questions._id}
                          stae1={state}
                          queston1={questions}
                          filterTheQuestins={filterTheQuestins}
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
          {}
        </>
      )}
    </>
  )
}

export default QuestionPaper
