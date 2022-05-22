import React from 'react'
import './sidenav.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHome,
  faStore,
  faAddressCard,
  faMessage
} from '@fortawesome/free-solid-svg-icons'

const SideNav = React.forwardRef((props, ref) => {
  const useME = () => {
    ref.current.click()
  }
  return (
    <>
      <div
        style={{ cursor: 'pointer' }}
        onClick={useME}
        className='halfDiv'
      ></div>
      <div id='div3' className='halfDiv'>
        <div className='div5'>
          <ul className='ulList2'>
            <li>
              <Link className='link_underline' to={'/'}>
                <FontAwesomeIcon icon={faHome} className={'faCircle'} />
                &#160; Home
              </Link>
            </li>
            <li>
              <Link className='link_underline' to={'/product'}>
                <FontAwesomeIcon icon={faStore} />
                &#160; Product
              </Link>
            </li>
            <li>
              <Link className='link_underline' to={'/contatct'}>
                <FontAwesomeIcon icon={faAddressCard} />
                &#160; Contact
              </Link>
            </li>
            <li>
              <Link className='link_underline' to={'/about'}>
                <FontAwesomeIcon icon={faMessage} />
                &#160; About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
})

export default SideNav
