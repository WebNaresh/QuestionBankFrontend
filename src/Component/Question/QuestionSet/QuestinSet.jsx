import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { Link } from 'react-router-dom'

const QuestinSet = ({ questionType, code, eachMark }, props) => {
  // console.log(questionType.qustionCount)
  console.log(questionType)

  return (
    <>
      <Link
        to={`/product/${questionType.qustionCount}/${eachMark}/${code}/${questionType.type}`}
        className='questionSet1'
      >
        <div className='questionSet2'>
          <div className='alignMe'>
            <h4>Q &nbsp; {questionType.type}</h4>
            <h4>Mark: &nbsp;{questionType.mark}</h4>
          </div>
          <h4 className='flex'>
            &nbsp; &nbsp; &nbsp; Total Question Count: &nbsp;
            {questionType.qustionCount}
          </h4>
          <div className='progress'>
            &nbsp;&nbsp;
            <ProgressBar bgColor={'#2874f0'} height={'17px'} completed={13} />
          </div>
        </div>
      </Link>
    </>
  )
}

export default QuestinSet
