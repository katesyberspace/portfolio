import React, { Component } from 'react';
import './App.css';
import {Layout, Header,Drawer, Navigation, Content} from 'react-mdl'
import Main from './pages/Main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
          <Layout fixedHeader>
              <Header title="Kate Sy | Web Developer" scroll>
                  <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <div className="page-content" />
                <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
