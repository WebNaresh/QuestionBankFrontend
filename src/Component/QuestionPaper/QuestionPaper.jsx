import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../../Utils/MetaData'
import { getQuestion } from '../../action/productAction'
import { useAlert } from 'react-alert'
import Loader from '../Home/Product/Loader/Loader'
import { useParams } from 'react-router-dom'
import './QuestionPaper.css'
import FillBlanks from './questionFolder/FillBlanks/FillBlanks'
import { clearErrors } from '../../action/userAction'
import TrueFalse from './questionFolder/StateTrueFalse/TrueFalse'
import MultipleSingle from './questionFolder/MultipleSingle/MultipleSingle'

const QuestionPaper = () => {
  let params = useParams()
  const alert = useAlert()
  const dispatch = useDispatch()
  const { question, error, loading } = useSelector(state => state.questions)
  useEffect(() => {
    dispatch(getQuestion(params.code, params.id))
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
  }, [error, dispatch, alert, params.id, params.code])
  console.log(question)

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <MetaData title='Build QUESTION PAPER' />
          {question.length === 0 ? (
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
                    {question &&
                      question.map(questions => (
                        <FillBlanks key={questions._id} queston1={questions} />
                      ))}
                  </>
                )

              case 'State whether True or False':
                return (
                  <>
                    {question &&
                      question.map(questions => (
                        <TrueFalse
                          key={questions._id}
                          loading={loading}
                          queston1={questions}
                        />
                      ))}
                  </>
                )
              case 'Multiple choice question with single correct answer':
                return (
                  <>
                    {question &&
                      question.map(questions => (
                        <MultipleSingle
                          key={questions._id}
                          queston1={questions}
                        />
                      ))}
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
