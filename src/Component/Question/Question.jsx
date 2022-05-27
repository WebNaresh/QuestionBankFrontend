import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from '../../Utils/MetaData'
import { getQuestionSet } from '../../action/productAction'
import { useAlert } from 'react-alert'
import Loader from '../Home/Product/Loader/Loader'
import { useLocation, useParams } from 'react-router-dom'
import QuestingSet from './QuestionSet/QuestinSet'

import './Question.css'

const Question = () => {
  let params = useParams()
  const alert = useAlert()
  const dispatch = useDispatch()
  const { questionSet, userQuestionSet, error, loading } = useSelector(
    state => state.questionSet
  )
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getQuestionSet(params.id))
  }, [dispatch, error, alert, params.id])
  const { state } = useLocation()
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <MetaData title='Build QUESTION PAPER' />

          {userQuestionSet &&
            userQuestionSet.map(userQuestionSet => (
              <QuestingSet
                questionType={userQuestionSet}
                eachMark={userQuestionSet.mark / userQuestionSet.qustionCount}
                key={userQuestionSet._id}
                questionSetId={userQuestionSet._id}
                code={questionSet[0].questionSetCode}
                userQuSetId={state._id}
              />
            ))}
        </>
      )}
    </div>
  )
}

export default Question
