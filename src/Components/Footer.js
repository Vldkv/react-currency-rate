import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

class Footer extends Component {
    render() {
      return (
          <Container fluid style={{ backgroundColor:"#212529", color:"#FFF",  position: "fixed",
          bottom: "0"}}>
            <Container className='footer' style={{ display: "flex", justifyContent: "center", padding: "10px"}}>
                <p className='footer-text'>Have a nice day!</p>
            </Container>
          </Container>
      )
    }
  }

  export default Footer; 
  