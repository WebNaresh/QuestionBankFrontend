import React, { useEffect } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
// import { useAlert } from 'react-alert'
import MetaData from '../../Utils/MetaData'
import Product from './Product/Product'
import { getProduct } from '../../action/productAction'
import Loader from './Product/Loader/Loader'
import { useAlert } from 'react-alert'

const Home = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const { question, error, loading } = useSelector(state => state.question)
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getProduct())
  }, [dispatch, error, alert])

  return (
    <>
      <>
        <MetaData title='Build Awsome PC' />
        <div className={'home1'}>
          <p className='home-p'>Welcome To Your Qustion Paper</p>
          <h1 id='iAmH1'>😉 Life Is The Most Difficult Exam 😉</h1>
          <a href='#homeProduct'>
            <button className='btn btn-border-4 '>
              <p id='iAmH1'>YOU GRAB IT! </p>
            </button>
          </a>
        </div>
        <div id='homeProduct'>
          <h2 id='featureHome'>Featured Question Set</h2>
          {loading ? (
            <Loader />
          ) : (
            <div id='rowMe'>
              {question &&
                question.map(question => (
                  <div className='container' key={question._id}>
                    <Product question={question}></Product>
                  </div>
                ))}
            </div>
          )}
        </div>
      </>
    </>
  )
}

export default Home
