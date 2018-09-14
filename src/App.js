import React, { Component } from 'react';
import './App.css';
import {Layout, Header,Drawer, Navigation, Content} from 'react-mdl'
import Main from './pages/Main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
          <Layout>
              <Header transparent title="My Folio" scroll>
                  <Navigation className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer className="drawer" title="My Folio">
                  <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content scroll="true">
                <div className="page-content" />
                <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
