import React, { Component } from 'react'
import TextInputGroup from "../layout/TextInputGroup"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {addContact} from "../../actions/index"


class AddContact extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
        errors: {}
    }
    onSubmit = e =>{
        e.preventDefault()

        const {name , email , phone} = this.state

        //Check for Errors
        if (name === ''){
            this.setState({
                errors: {name: "Name is required"}
            })
            return
        }

        if (phone === ''){
            this.setState({
                errors: {phone: "Phone is required"}
            })
            return
        }

        if (email === ''){
            this.setState({
                errors: {email: "Email is required"}
            })
            return
        }

        const newContact = {
            name,
            phone,
            email
        }

        // ADD Contact
        this.props.addContact(newContact)
        // Clear State
        this.setState({
            name: "",
            phone: "",
            email: ""
        })

        this.props.history.push("/")

    }


    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, email, phone, errors} = this.state

        return (
            <div className="card mb3" >
                <h4 className="card-header">AddContact</h4>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                    <TextInputGroup
                        label = "Name"
                        name = "name"
                        placeholder = "Enter Name"
                        value = {name}
                        onChange = {this.onChange}
                        error= {errors.name}
                    />
                    <TextInputGroup 
                        label = "Phone"
                        name = "phone"
                        placeholder = "Enter Phone"
                        value = {phone}
                        onChange = {this.onChange}
                        error = {errors.phone}
                    />
                    <TextInputGroup 
                        label = "Email"
                        name = "email"
                        placeholder = "Enter Email"
                        type = "email"
                        value = {email}
                        onChange = {this.onChange}
                        error = {errors.email}
                    />
                    <input 
                        type= "submit"
                        value = "Add Contact"
                        className = "btn btn-primary btn-block"
                    />
                    </form>

                </div>
            </div>
        )
    }
}

AddContact.propTypes ={
    addContact: PropTypes.func.isRequired
}


export default connect(
    null,
    {addContact}
)(AddContact)
