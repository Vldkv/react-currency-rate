import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <>
      <div className="jumbotron" style={{marginTop:"5rem"}}>
        <h1 className="display-4">Hello! Thank you for using this application!</h1>
        <p className="lead">This project is built using the React JS library, React Router, React Bootstrap, Exchangerate.host API</p>
      </div>
      </>
    )
  }
}
