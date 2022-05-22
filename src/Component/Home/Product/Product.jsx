import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({ question }) => {
  const date = new Date(question.paperDate).toDateString()
  return (
    <>
      <Link className='productCard' to={`questionSet/${question._id}`}>
        <img src={question.questionPaperImage} alt={question.title} />
        <p>{question.miniTitle}</p>
        <div className={'reactStars'}>
          <span className='reviews'>PaperDate:{date}</span>
          <span className='productPrice'>TotalMarks:{question.totalMarks}</span>
        </div>
      </Link>
    </>
  )
}

export default Product
