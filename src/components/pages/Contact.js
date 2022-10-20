import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <h1 style={{color: 'white'}}>Contact</h1>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label" style={{color: 'white'}}>Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label" style={{color: 'white'}}>Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </div>
  )
}

export default Contact;