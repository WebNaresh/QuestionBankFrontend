import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../Home/Product/Loader/Loader'

const MultipleSingle = ({ queston1 }) => {
  let params = useParams()
  const [answer, setAnswer] = useState()
  const alert = useAlert()
  const callReducer = () => {
    console.log(answer)
  }
  const { error, loading } = useSelector(state => state.mark)
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
  }, [error, alert])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
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
                  <div className='bollean'>
                    {queston1.options.map(options => (
                      <div>
                        <input
                          type='radio'
                          value={options.option}
                          checked={answer === true}
                          onChange={e => setAnswer(true)}
                          id='true'
                        />
                        <label htmlFor='true'>True</label>
                      </div>
                    ))}
                  </div>
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
        </>
      )}
    </>
  )
}

export default MultipleSingle
