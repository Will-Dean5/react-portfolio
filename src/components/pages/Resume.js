import React from 'react'

const Resume = () => {
  return (
    <div>
    <h1 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Resume</h1>
    <a className='hello' href='https://docs.google.com/document/d/14hQbXRnFxTqSiC0zUhti7CDrpk97BAd6Es84G2aOvlU/edit?usp=sharing' style={{color: 'white', display: 'flex', justifyContent: 'center', fontSize: '40px', }}>My Resume</a>
    <footer style={{marginTop: '730px', display: 'flex', justifyContent: 'space-evenly'}}>
        <a href="https://github.com/Will-Dean5" style={{color: 'white', fontSize: '18px'}}> GitHub</a>
        <a href="https://www.linkedin.com/in/william-dean-17ba0a248/" style={{color: 'white', fontSize: '18px'}}> LinkedIn</a>
        <a href="https://stackoverflow.com/users/19771761/wnfmt" style={{color: 'white', fontSize: '18px'}}> Stack Overflow</a>
      </footer>
    </div>
    
    )
}

export default Resume;