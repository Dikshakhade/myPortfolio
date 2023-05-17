import React from 'react'
import "./skill.css"
function Skill() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='skillimg' id="first"></div>
        <p>Html/css</p>
      
      </div>
      <div className='card'>
        <div className='skillimg' id='sec'></div>
        <p>React</p>
      </div>
      <div className='card'>
        <div className='skillimg' id="third"></div>
        <p>Node.js</p> 
      </div>
      <div className='card'>
        <div className='skillimg' id="four"></div>
        <p>MongoDB</p> 
      </div>
    </div>
  )
}

export default Skill

