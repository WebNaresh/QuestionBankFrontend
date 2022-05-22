import './footer.css'
import appstore from '../../images/Appstore.png'
import appstore2 from '../../images/playstore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Footer = () => {
  const footer = document.getElementById('footer')
  const postion1 = getOffset(footer).top

  const [absoluete] = useState(postion1 === 0 ? 'relative' : 'absolute')

  function getOffset (el) {
    var _x = 0
    var _y = 0
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft
      _y += el.offsetTop - el.scrollTop
      el = el.offsetParent
    }
    return { top: _y, left: _x }
  }

  return (
    <>
      <div id='footer' className={absoluete}>
        <div className='leftFooter'>
          <h4>DOWNLOAD OUR APP</h4>
          <p
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              width: '115px'
            }}
          >
            Download App for Android and IOS mobile phone
          </p>
          <img className={'img12'} src={appstore} alt='' />
          <img className={'img12'} src={appstore2} alt='' />
        </div>
        <div className='midFooter'>
          <h1 className={'link_underline'}>Question_Paper</h1>
          <p>High Quality is our first priority</p>
          <p>Copyrights 2021 &copy; NsNaresh</p>
        </div>
        <div className='rightFooter'>
          <h4>Follow Us</h4>
          <a href='http://www.instagram.com/n_s_official_advanced/'>
            <FontAwesomeIcon
              className='fa-icon1'
              size={'2x'}
              icon={faInstagram}
            ></FontAwesomeIcon>
          </a>
          <a href='http://www.instagram.com/n_s_official_advanced/'>
            <FontAwesomeIcon
              className='fa-icon1'
              size={'2x'}
              icon={faYoutube}
            ></FontAwesomeIcon>
          </a>
          <a href='https://www.facebook.com/ankat.bhosale.9/'>
            <FontAwesomeIcon
              className='fa-icon3'
              size={'2x'}
              icon={faFacebook}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
