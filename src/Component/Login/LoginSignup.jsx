import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, get_login } from '../../action/userAction'
import './loginSignup.css'
import Loader from '../Home/Product/Loader/Loader'
import { useAlert } from 'react-alert'

const LoginSignup = () => {
  const alert = useAlert()
  const navigate = useNavigate()
  const [changeForm, setChangeForm] = useState('')
  const [changeData, setChangeData] = useState('Register Now')
  const [loginIngo, setLoginIngo] = useState({ loginPass: '', loginEmail: '' })
  const dispatch = useDispatch()

  const { loading, isAuthenticatedUser, error } = useSelector(
    state => state.logiUser
  )
  const changeFormOnClick = () => {
    setChangeForm('cu')
    setChangeData('login Now')
    if (changeForm === 'cu') {
      setChangeForm('')
      setChangeData('Register Now')
    }
  }

  const handleLoginForm = e => {
    e.preventDefault()
    dispatch(get_login(loginIngo.loginEmail, loginIngo.loginPass))
  }
  useEffect(() => {
    if (isAuthenticatedUser) {
      navigate('/')
    }
    if (error) {
      alert.error(error)
    }
    dispatch(clearErrors())
  }, [alert, error, isAuthenticatedUser, navigate, dispatch])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='containerOfLogin'>
          <div className='main'>
            <div className={`curtain d-flex f-dir ${changeForm}`} id='cur'>
              <div className='hold'>
                <h1>
                  <span className='autot' />
                </h1>
                <h1 className='gap'>Acknowledge yourself , </h1>
                <h3 className='gap'>Test yourself until you</h3>
                <h3 className='gap'> are not acknowledge yourself</h3>
                <button
                  id='btn'
                  onClick={changeFormOnClick}
                  className='loginSignupButton'
                >
                  {changeData}
                </button>
              </div>
            </div>
            <div className='login'>
              <div className='logo-holder d-flex f-dir'>
                <h1>Collage exam</h1>
              </div>
              <div className='login-form d-flex f-dir'>
                <div className='loginL d-flex f-dir'>
                  <h1>Log in your account</h1>
                </div>
                <form
                  className='d-flex f-dir lo-form'
                  onSubmit={handleLoginForm}
                >
                  <input
                    type='email'
                    className='input'
                    spellCheck='false'
                    required={true}
                    value={loginIngo.loginEmail}
                    onChange={e =>
                      setLoginIngo({ ...loginIngo, loginEmail: e.target.value })
                    }
                    autoComplete='false'
                    placeholder='Enter Your Email'
                  />
                  <input
                    type='text'
                    value={loginIngo.loginPass}
                    className='input'
                    spellCheck='false'
                    required={true}
                    autoComplete='false'
                    onChange={e =>
                      setLoginIngo({ ...loginIngo, loginPass: e.target.value })
                    }
                    placeholder='Enter Your password'
                  />
                  <div className='log-an d-flex'>
                    <p className='forP'>
                      don't have an account?
                      <span
                        className='blue'
                        id='btn'
                        onClick={changeFormOnClick}
                      >
                        register
                      </span>
                    </p>
                  </div>
                  <input
                    type='submit'
                    className='sub'
                    id='subL'
                    defaultValue='Get Started'
                  />
                </form>
                <div className='span-hold d-flex'>
                  <span className='horline' />
                  <small>OR</small>
                  <span className='horline' />
                </div>
                {/* <div className='another d-flex f-dir'>
              <p>You can also log in with</p>
              <div className='logos d-flex '>
                <i className='fab fa-facebook' style={{ color: '#0087ff' }} />
                <i
                  className='fab fa-google-plus '
                  style={{ color: 'crimson' }}
                />
                <i
                  className='fab fa-instagram-square'
                  style={{ color: '#ef2c9c' }}
                />
              </div>
            </div> */}
              </div>
            </div>
            <div className='register d-flex f-dir'>
              <div className='logo-holder d-flex f-dir'>
                <h1>Collage exam</h1>
              </div>
              <div className='login-form d-flex f-dir'>
                <div className='loginL d-flex f-dir'>
                  <h1>Create your account</h1>
                </div>
                <form id='reForm' className='d-flex f-dir ro-form' method='GET'>
                  <input
                    type='text'
                    className='input'
                    id='errName'
                    placeholder='Enter Your name'
                    formNoValidate={true}
                  />
                  <p className='ex' id='ex1' />
                  <input
                    type='email'
                    className='input'
                    id='errEmail'
                    placeholder='Enter Your email'
                  />
                  <p className='ex' id='ex2' />
                  <input
                    type='password'
                    className='input'
                    id='errPass'
                    placeholder='Enter Your password'
                  />
                  <p className='ex' id='ex3' />
                  <input
                    type='password'
                    className='input'
                    id='errConPass'
                    placeholder='confirm Your password'
                  />
                  <p className='ex' id='ex4' />
                  <input
                    type='submit'
                    id='sub'
                    className='sub'
                    defaultValue='Get Started'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginSignup
