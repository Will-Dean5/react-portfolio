import React from 'react'

const Portfolio = () => {
  return (
    <div className='container'>
      <h1 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Portfolio</h1>
      <div className="card" style={{width: '18rem;', color: 'white', display: 'flex', justifyContent: 'center'}}>
       <a href='https://young-oasis-85311.herokuapp.com/'>
       <img src="../../images/solar.png" className="card-img-top" alt="Solar Clicker" />
       </a>
        <div className="card-body">
          <h1>Solar Clicker</h1>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div><div className="card" style={{width: '18rem;', color: 'white', display: 'flex', justifyContent: 'center'}}>
        <a href='https://supernaldeity.github.io/gamers-checkpoint/'>
        <img src='../../images/game.png' className="card-img-top" alt="Gamers Checkpoint" />
        </a>
        <div className="card-body">
        <h1>Gamers Checkpoint</h1>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div><div className="card" style={{width: '18rem;', color: 'white', display: 'flex', justifyContent: 'center'}}>
        <a href='https://tranquil-shelf-11284.herokuapp.com/'>
        <img src="../../images/note.png" className="card-img-top" alt="Note Taker" />
        </a>
        <div className="card-body">
        <h1>Note Taker</h1>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;