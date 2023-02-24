import React, { Component } from 'react'
import { Container,  Card, CardGroup, } from 'react-bootstrap'
import Calculator  from './Calculator';

 class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'date' : '',
            'currencyRate' : {}
        }
        this.currency = ['USD', 'CZK', 'UAH'];
        this.getRate();
    }

    getRate = () => {
        fetch(`https://api.exchangerate.host/latest?access_key=&base=EUR&symbols=USD,CZK,UAH`)
        .then(data => {
            return data.json();
        })
        .then(data => {
            this.setState({ date: data.date });
            let result = {};
            for (let i = 0; i < this.currency.length; i++) {
                result[this.currency[i]] = data.rates[this.currency[i]];
            }
            this.setState ({ currencyRate: result })
        })
    }

    render() {
      return (
        <Container>
            <h2 className='text-center m-4 mt-5 pt-4'>Currency Rate on {this.state.date}</h2>
            <CardGroup >
                {Object.keys(this.state.currencyRate).map((keyName, i) => 
                    (
                        <Card  bg="info " className='m-2' key={keyName}>
                            <Card.Body>
        `                       <Card.Title>{keyName}</Card.Title>
                                <Card.Text>{this.state.currencyRate[keyName].toFixed(2)}</Card.Text>
                                <p>to 1€</p>
                            </Card.Body>
                        </Card>
                    ))
                }
            </CardGroup>
            
            <Calculator rate={this.state.currencyRate} />

          </Container>
      )
    }
  }

  export default Rate;
  