import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountsList extends Component {
   constructor(props) {
      super(props);

      this.state = { accounts: [] };
   }

   render() {

      // Accounts
      const accounts = this.state.accounts
         .map(acc => <AccountEl key={acc.id} {...acc} matchUrl={this.props.match.url} />);

      return (
         <div>
            <h1>Accounts</h1>
            <p>You have {this.state.accounts.length} accounts</p>

            <div className="list-group">
               {accounts}
            </div>
         </div>
      );
   }

   componentDidMount() {
      fetch('http://localhost:3001/accounts')
      .then(res => res.json())
      .then(accounts => {
         this.setState({ accounts });
      });
   }
}

// Single account element
const AccountEl = (props) => {
   return (
      <Link to={`${props.matchUrl}/${props.id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{props.id}. {props.type}</h4>
         <p className="list-group-item-text">
            Sortcode: {props.sortcode}, currency: {props.currency}, balance: {props.balance} {props.currency}
         </p>
      </Link>
   );
}

export default AccountsList;