import React from 'react'

const ContactMe = () => {
  return (
    <div className='contact-container'>
      <h1>Contact Me</h1>
      <form action=""> <input type="text" placeholder='write me a message' />
       <button type='submit' className='highlighted-btn'>Send </button>
       </form>
     
    </div>
  )
}

export default ContactMe
