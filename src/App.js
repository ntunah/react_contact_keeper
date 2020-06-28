import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./js/components/layout/Header"
import Contacts from "./js/components/contacts/Contacts"
import EditContact from "./js/components/contacts/EditContact"
import AddContact from "./js/components/contacts/AddContact"

class App extends Component {
  render() {
    return (
      <Router>
        <Header branding="Contact Manager"/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Contacts }/>
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route exact path ="/contact/add" component= {AddContact}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;