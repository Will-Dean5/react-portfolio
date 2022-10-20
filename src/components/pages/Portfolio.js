import React from 'react'
let img1 = require('../../images/solar.png');
let img2 = require('../../images/game.png');
let img3 = require('../../images/note.png');

const Portfolio = () => {
  return (
    <div className='container'>
      <h1 style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>Portfolio</h1>
      <div className="card" style={{ width: '18rem;', color: 'white', display: 'flex', justifyContent: 'center' }}>
        <a href='https://young-oasis-85311.herokuapp.com/'>
          <img style={{ marginLeft: '250px' }} src={img1} className="card-img-top" alt="Solar Clicker" />
        </a>
        <div className="card-body" style={{ marginLeft: '25px' }}>
          <h1 style={{ marginLeft: '50px', marginRight: '400px' }}>Solar Clicker</h1>
          <p className="card-text" style={{ marginLeft: '50px', marginRight: '400px' }}>This is the solar clicker. It is a cookie clicker type of game where you can click the earth to earn stars. You can use the stars you earn to buy upgrades that will passively generate stars for you.</p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem;', color: 'white', display: 'flex', justifyContent: 'center' }}>
        <a href='https://supernaldeity.github.io/gamers-checkpoint/'>
          <img style={{ marginLeft: '250px' }} src={img2} className="card-img-top" alt="Gamers Checkpoint" />
        </a>
        <div className="card-body" style={{ marginLeft: '25px' }}>
          <h1 style={{ marginLeft: '50px', marginRight: '400px' }}>Gamers Checkpoint</h1>
          <p className="card-text" style={{ marginLeft: '50px', marginRight: '400px' }}>This is the Gamers Checkpoint. This is used to search video games. When you search a game it will give you a slideshow on the left, gifs on the bottom, and some information about it on the right. There are also buttons for your recent searches.</p>
        </div>
      </div><div className="card" style={{ width: '18rem;', color: 'white', display: 'flex', justifyContent: 'center' }}>
        <a href='https://tranquil-shelf-11284.herokuapp.com/'>
          <img style={{ marginLeft: '250px' }} src={img3} className="card-img-top" alt="Note Taker" />
        </a>
        <div className="card-body" style={{ marginLeft: '25px' }}>
          <h1 style={{ marginLeft: '50px', marginRight: '400px' }}>Note Taker</h1>
          <p className="card-text" style={{ marginLeft: '50px', marginRight: '400px' }}>The note taker is used for you to be able to write notes that you need to remember and save them so you can come back and view them later. There is also a delete feature.</p>
        </div>
      </div>
      <footer style={{marginTop: '90px', display: 'flex', justifyContent: 'space-evenly'}}>
        <a href="https://github.com/Will-Dean5" style={{color: 'white', fontSize: '18px'}}> GitHub</a>
        <a href="https://www.linkedin.com/in/william-dean-17ba0a248/" style={{color: 'white', fontSize: '18px'}}> LinkedIn</a>
        <a href="https://stackoverflow.com/users/19771761/wnfmt" style={{color: 'white', fontSize: '18px'}}> Stack Overflow</a>
      </footer>
    </div>
  )
}

export default Portfolio;