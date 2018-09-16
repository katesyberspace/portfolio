import React from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import './Projects.css'

class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return (
        <div className="projects-grid">
          <Card className="card-elem" shadow={3}>
            <CardTitle
              className="tictactoe"
              style={{color: "white"}}
            >
              Tic-Tac-Toe
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe modi assumenda tempora commodi ipsum consectetur neque ducimus. Suscipit vero in aut nemo ipsum impedit unde nihil ut velit neque?
            </CardText>
            <CardActions>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card className="card-elem" shadow={3} style={{minWidth: '450', margin: "auto"}}>
            <CardTitle 
              style={{
                color: 'white', 
                height: '176px', 
                background: 'url(https://i.imgur.com/SyDbeAh.png) center/contain'
              }}>
              billmates
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe modi assumenda tempora commodi ipsum consectetur neque ducimus. Suscipit vero in aut nemo ipsum impedit unde nihil ut velit neque?
            </CardText>
            <CardActions>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card className="card-elem" shadow={3} style={{minWidth: '450', margin: "auto"}}>
            <CardTitle 
              style={{
                color: 'white', 
                height: '176px', 
                background: 'url(https://i.imgur.com/2dXmWf3.png) center/100%'
              }}>
              Let's Quiz!
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe modi assumenda tempora commodi ipsum consectetur neque ducimus. Suscipit vero in aut nemo ipsum impedit unde nihil ut velit neque?
            </CardText>
            <CardActions>
              <Button colored><a href="https://github.com/katesyberspace/the_quiz" target="_blank">Github</a></Button>
              <Button colored><a href="http://letsquiz.herokuapp.com" target="blank">Live Demo</a></Button>
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>


          <Card className="card-elem" shadow={3} style={{minWidth: '450', margin: "auto"}}>
            <CardTitle 
              style={{
                color: 'white', 
                height: '176px', 
                background: 'url(https://i.imgur.com/puEHyRg.png) center/100%'
              }}>
              Cruisin_
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe modi assumenda tempora commodi ipsum consectetur neque ducimus. Suscipit vero in aut nemo ipsum impedit unde nihil ut velit neque?
            </CardText>
            <CardActions>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          

        </div>
      )
    } else if (this.state.activeTab === 1){
      return (
        <div className="projects-grid">
          <Card className="card-elem" shadow={3} style={{minWidth: '450', margin: "auto"}}>
            <CardTitle 
              style={{
                color: 'white', 
                height: '176px', 
                background: 'url(https://previews.123rf.com/images/pozitiw/pozitiw1211/pozitiw121100152/16516172-tic-tac-toe-doodle-style.jpg) center/cover'
              }}>
              Tic Tac Toe
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe modi assumenda tempora commodi ipsum consectetur neque ducimus. Suscipit vero in aut nemo ipsum impedit unde nihil ut velit neque?
            </CardText>
            <CardActions>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> 

        <Card className="card-elem" shadow={3} style={{minWidth: '450', margin: "auto"}}>
          <CardTitle 
            style={{
              color: 'white', 
              height: '176px', 
              background: 'url(https://previews.123rf.com/images/pozitiw/pozitiw1211/pozitiw121100152/16516172-tic-tac-toe-doodle-style.jpg) center/cover'
            }}>
            Tic Tac Toe
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe modi assumenda tempora commodi ipsum consectetur neque ducimus. Suscipit vero in aut nemo ipsum impedit unde nihil ut velit neque?
          </CardText>
          <CardActions>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card> 
      </div>
      
      )
    } else if (this.state.activeTab === 2) {
      return (
        <Card className="card-elem" shadow={3} style={{minWidth: '450', margin: "auto"}}>
        <CardTitle 
          style={{
            color: 'white', 
            height: '176px', 
            background: 'url(https://previews.123rf.com/images/pozitiw/pozitiw1211/pozitiw121100152/16516172-tic-tac-toe-doodle-style.jpg) center/cover'
          }}>
          Tic Tac Toe
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe modi assumenda tempora commodi ipsum consectetur neque ducimus. Suscipit vero in aut nemo ipsum impedit unde nihil ut velit neque?
        </CardText>
        <CardActions>
          <Button colored>Github</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card> 
      )
    }
  }

  render(){
    return (
      <div className="category-tabs page">
        <Tabs className="tabs" activeTab={this.state.activeTab} onChange={tabId => this.setState({activeTab: tabId})} ripple style={{borderColor: 'transparent'}}>
          <Tab style={{color: 'whitesmoke'}}>Web Development</Tab>
          <Tab>Drone Photography</Tab>
          <Tab>Art</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }

}


export default Projects