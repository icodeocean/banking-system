import React, { Component } from 'react';
import axios from 'axios';

class SingleAccount extends Component {
   constructor() {
      super();

      this.state = { singleAcc: [] };
   }

   render() {
      return (
         <div className="well">
            <h1>{this.state.singleAcc.type}</h1>
            <ul>
               <li>Sortcode: {this.state.singleAcc.sortcode}</li>
               <li>Number: {this.state.singleAcc.number}</li>
               <li>Currency: {this.state.singleAcc.currency}</li>
               <li>Balance: {this.state.singleAcc.balance} {this.state.singleAcc.currency}</li>
            </ul>
         </div>
      );
   }

   componentDidMount() {
      axios.get(`http://localhost:3001/accounts/${this.props.match.params.accId}`)
      .then(res => res.data)
      .then(singleAcc => {
         this.setState({ singleAcc });
      });
   }
}

export default SingleAccount;