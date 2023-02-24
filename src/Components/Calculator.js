import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

 class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { rate : props.rate };
    }

    calcRate = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let countCurrency = elements['count-currency'].value;
        let typeCurrency = elements['type-currency'].value;
        this.setState({ result : (countCurrency / this.state.rate[typeCurrency])})
    }

    render() {
      return (

          <Container className='calculator'>
            <h1 className='text-center m-4'>Calculator</h1>

            <div className='block'>
                <div>I want to</div>

                <div className='text-center m-4'>
                    < form onSubmit = {this.calcRate}>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Amount">
                            <Form.Control type="number" placeholder="100" name ="count-currency"/>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="Currency">
                            <Form.Select name ="type-currency">
                                <option>Select the currency</option>
                                {Object.keys(this.props.rate).map((keyName, i) => (
                                <option key={keyName} value={keyName}>{keyName}</option>
                                ))
                                }
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row> 

                    <Button className='m-2'variant="info" type="submit" defaultValue="calc" mt="4">Calculate</Button>
                    
                </form>                      
                </div>

                <div className='text-center'>
                    <h4>Result</h4>
                    <ul  className="calc-res" style={{listStyleType:'none', justifyContent: 'center', paddingRight: '32px', paddingBottom: '64px' }}>
                        <li>EUR {this.state.result.toFixed(2)}</li>
                    </ul>
                </div>
            </div>
          </Container>
      )
    }
  }

  export default Calculator;