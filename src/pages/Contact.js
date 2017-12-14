import React, { Component} from 'react';
import Nav from '../components/Nav';
import Form from '../components/Form'

class ContactForm extends Component {
    render() {
        return (
            <div className="Form">
                <Nav />
                <Form />
            </div>

        );
    }
}

export default ContactForm;