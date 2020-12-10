import React from "react"
import { observer } from "mobx-react"
import { CURRENCIES } from "../currencies";
import { Link } from 'react-router-dom';
import { Form, Row, Col, FormGroup } from 'reactstrap';

@observer
export default class Currency extends React.Component {
    
    changeFromCurrency = (e) => {
        this.props.store.fromCurrency = e.target.value;
        this.callApi();
    }
    
    changeToCurrency = (e) => {
        this.props.store.toCurrency = e.target.value;
        this.callApi();
    }

    changeBaseAmount = (e) => {
        this.props.store.baseAmount = e.target.value;
        this.props.store.result = this.props.store.baseAmount*this.props.store.multiplier;
    }

    
    callApi(){
        fetch(`https://free.currconv.com/api/v7/convert?q=${this.props.store.fromCurrency}_${this.props.store.toCurrency}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`)
        .then(results => {
           return results.json();
       }).then(data => {
         // console.log(data)
         this.props.store.multiplier = data[Object.keys(data)[0]];
         this.props.store.result = this.props.store.baseAmount*this.props.store.multiplier;
       }); 
    }
      
    render() {
      const {fromCurrency, toCurrency, baseAmount, multiplier, result} = this.props.store;
      
      const currencyChoice = CURRENCIES.map(currency =>
        <option key={currency["currency"]} value={currency["currency"]}> {currency["currency"]} </option>      
      );
                                            
            
      return(
        <div className="container">
          <Form>
            <Row form>
            <Col md-6>
              <FormGroup> 
                <h3>Convert from:</h3>
                <select  value={fromCurrency} onChange={this.changeFromCurrency}>
                  {currencyChoice}
                </select>
              </FormGroup>
            </Col>
            <Col md-6>
              <FormGroup> 
                <h3>Convert to:</h3>
                <select  value={toCurrency} onChange={this.changeToCurrency}>
                  {currencyChoice}
                </select>
              </FormGroup>
            </Col>
            </Row>
          
            <h3>Enter Amount:</h3>
            <input type='number' defaultValue={baseAmount} onChange={this.changeBaseAmount}></input> 
       
            
         </Form>                       
         <h4>{baseAmount} {fromCurrency} is equal to {parseFloat(result).toFixed(2)} {toCurrency}</h4>
         <h5> Conversion Rate: 1 {fromCurrency} is equal to {parseFloat(multiplier).toFixed(2)} {toCurrency} </h5>  

         <div><Link to='/data'>&#60;&#60;Data</Link></div>
         <div><Link to='/home'>Home&#62;&#62;</Link></div>
         
       </div>
      );
    }
  }