import React from 'react'

const About = () => {
  return (
    <div className='div1'>
    <h1 className='' style={{color: 'white', display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>About</h1>
    <p className='' style={{color: 'white',display: 'flex', justifyContent: 'center', fontSize: '20px', marginLeft: '380px', marginRight: '380px'}}>Hi my name is Will Dean and This is my first react portfolio. I am exicted that you are checking it out. I am currently a student enrolled in a full stack web development bootcamp, I took AP computer science in highschool, I am having a great time learning in this full stak bootcamp. This seemed like something I would want to pursue for a career because it gives you so many oppurntunitys to explore your creativity. I believe in making webpages with 100% effort and making everything as perfect as it can be.</p>
    <footer style={{marginTop: '660px', display: 'flex', justifyContent: 'space-evenly'}}>
        <a href="https://github.com/Will-Dean5" style={{color: 'white', fontSize: '18px'}}> GitHub</a>
        <a href="https://www.linkedin.com/in/william-dean-17ba0a248/" style={{color: 'white', fontSize: '18px'}}> LinkedIn</a>
        <a href="https://stackoverflow.com/users/19771761/wnfmt" style={{color: 'white', fontSize: '18px'}}> Stack Overflow</a>
      </footer>
    </div>
  )
}

export default About;