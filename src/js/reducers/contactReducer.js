import {
    GET_CONTACTS,
    DELETE_CONTACT,
    ADD_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT} from "../constants/action-types"

// A reducer is just a JvaScript function
// It takes two parameters: the current state and action
// Reducers produce the state of your application
const initialState = {
    contacts: [],
    contact: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CONTACTS:{
            // We keep the original state unaltered
            // The return state is just a copy of the initail state
            // for avoiding mutaions use concat or slice , or Object.assign
            return {
                ...state,
                contacts: action.payload
            }
        }
        case ADD_CONTACT:{
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        }
        case DELETE_CONTACT:{
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact =>
                    contact.id !== action.payload
                )
            }
        }
        case GET_CONTACT:{
            return{
                ...state,
                contact: action.payload
            }
        }
        case UPDATE_CONTACT:{
            return{
                ...state,
                contacts: state.contacts.map(
                    contact =>
                    contact.id === action.payload.id
                    ? (contact = action.payload) : contact
                )
            }
        }
        default:
            return state
    }
}