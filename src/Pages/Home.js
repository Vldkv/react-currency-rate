import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import Rate from '../Components/Rate';

export default class Home extends Component {
  render() {
    return (
        <>
            <Container>
                <Rate />
            </Container>
            </>
    )
  }
}
