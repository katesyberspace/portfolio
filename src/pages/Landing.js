import React from 'react'
import './Landing.css'
import {Grid, Cell} from 'react-mdl'

class Landing extends React.Component {

  render(){
    return (
      <div className="landing">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              className="avatar-img" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Robot-icon.svg/2000px-Robot-icon.svg.png" 
              alt="avatar"/>
            
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>HTML | CSS | Javascript | React | NodeJS | Express | Ruby on Rails</p>
              <div className="social-links">
                {/* linked in */}
                <a 
                  href="https://linkedin.com/in/katesy" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-linkedin" ></i>      
                </a>

                {/* github*/}
                <a 
                  href="https://github.com/katesyberspace" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-github" ></i>      
                </a>

                
                {/* instagram */}
                <a 
                  href="https://www.instagram.com/katesyberspace/" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-instagram" ></i>      
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Landing