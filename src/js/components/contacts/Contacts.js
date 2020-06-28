import React, { Component } from 'react'
import Contact from "./Contact"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import { getContacts } from "../../actions/index"

class Contacts extends Component {
    componentDidMount(){
        this.props.getContacts();
    }

    render() {
        const {contacts} = this.props
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2">
                    Contact Lists
                </h1>
                {contacts.map(
                    contact => (
                    <Contact key={contact.id} contact={contact}/>
                    )
                )}
            </React.Fragment>
        )
    }
}

Contact.propTypes ={
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contacts: state.contact.contacts
})


export default connect(
    mapStateToProps,
    {getContacts}
    )(Contacts)