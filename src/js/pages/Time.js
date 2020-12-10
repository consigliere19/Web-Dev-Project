import React from "react"
import { observer } from "mobx-react"
import { Link } from 'react-router-dom';

@observer
export default class Time extends React.Component {

   componentDidMount(){ 
    // console.log("STARTED TIME")
     setInterval(() => (
        this.props.store.timeNow =  Date().toLocaleString()
        ), 1000);
   }

  render() {
    const { timeNow } = this.props.store
    return (
        <div>
            <h2>Time</h2>
            <h4>
                {timeNow}
            </h4>

            <div><Link to='/home'>&#60;&#60;Home</Link></div>
            <div><Link to='/data'>Data&#62;&#62;</Link></div>
            
            
        </div>
    )
  }
}