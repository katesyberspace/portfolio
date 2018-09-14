import React from 'react'
import {Grid, Cell, List, ListItem, ListItemContent }  from 'react-mdl'
import './Contact.css'

class Contact extends React.Component {

  render(){
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kate Sy</h2>
            <img 
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
              alt="avatar"
              className="contact-img"
            />
            <p className="contact-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quaerat perspiciatis laborum iste ab hic? Non eligendi ratione velit culpa a esse aperiam harum sunt at recusandae mollitia, neque provident.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    0422 326 441
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ms.katesy@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Contact