import React from "react"
import { observer } from "mobx-react"
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Card, CardText } from 'reactstrap';


@observer
export default class Data extends React.Component {

  componentDidMount() {
    // console.log("STARTED")
    axios.get(`https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole `)
      .then(res => {
        this.props.store.persons = res.data;
        // console.log("RECEIVED");
        console.log(this.props.store.persons[0]);
        this.props.store.isLoaded = true;
      })
  }

  render() {
    const { persons, isLoaded } = this.props.store

    if(!isLoaded)
        return <div>
                    <h2>Loading...</h2>
               </div>
    else{
    return (
    <div>
      <div>
        <ul>
          {persons.map((person) => (<li key={person.email}>
           <Card body inverse color="secondary"><CardText>{person.first+ " " +person.last}</CardText></Card></li>))}
        </ul>
     </div>
      
      <div><Link to='/time'>&#60;&#60;Time</Link></div>
      <div><Link to='/currency'>Currency&#62;&#62;</Link></div>
    </div>
    )
    }
  }
}