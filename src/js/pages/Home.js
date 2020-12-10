import React from "react"
import { observer } from "mobx-react"
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

@observer
export default class Home extends React.Component {

  render() {
    const { value, increment, decrement, reset } = this.props.store

    return (
      <div className="container" >
        <div>
        <h2>Count: {value}</h2>
        </div>
        <div>
        <Button color="success" onClick={increment}>Increment</Button>{' '}
        <Button color="danger" onClick={decrement}>Decrement</Button>{' '}
        <Button color="secondary" onClick={reset}>Reset</Button>
        </div>
       
        
       
        <div><Link to='/time'>Time&#62;&#62;</Link></div>

      </div>
    )
  }
}