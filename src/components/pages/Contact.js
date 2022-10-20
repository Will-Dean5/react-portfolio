import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <h1 style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>Contact</h1>
      <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div class="container">
          <form action="/action_page.php">
            <label style={{ fontSize: '26px', color: 'white', marginRight: '8px', marginLeft: '8px' }} for="fname">Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            <label style={{ fontSize: '26px', color: 'white', marginRight: '8px', marginLeft: '8px' }} for="email">Email</label>
            <input type="text" id="email" name="lastname" placeholder="Your email.."></input>
            <label style={{ fontSize: '26px', color: 'white', marginRight: '8px', marginLeft: '8px' }} for="email">Description</label>
            <input type="text" id="email" name="lastname" placeholder="Description"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </form>
      <footer style={{marginTop: '740px', display: 'flex', justifyContent: 'space-evenly'}}>
        <a href="https://github.com/Will-Dean5" style={{color: 'white', fontSize: '18px'}}> GitHub</a>
        <a href="https://www.linkedin.com/in/william-dean-17ba0a248/" style={{color: 'white', fontSize: '18px'}}> LinkedIn</a>
        <a href="https://stackoverflow.com/users/19771761/wnfmt" style={{color: 'white', fontSize: '18px'}}> Stack Overflow</a>
      </footer>
    </div>
  )
}

export default Contact;