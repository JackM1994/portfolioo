import React, {Component} from 'react';
import './ContactForm.css';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {value: '' };

        // this.handleChange =  this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label className="form-labels">
                    Name
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label className="form-labels">
                    Email
                    <input type="email" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label className="form-labels">
                    Subject
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label className="form-labels">
                    Message
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default ContactForm;