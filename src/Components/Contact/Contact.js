import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import ContactInfo from '../PersonalInfo/ContactInfo';

const contact = () => {
    return(
        <div className="contact">
            <h1 className="get-in-touch">Get in Touch</h1>
            <span className="config-message">The Contact form has not being fully configured yet. Free feel to email at any time.</span>
            <ContactForm />
            <div className="c-info">
            <ContactInfo 
                name ="Jack Morris"
                street = "Aghnagrange"
                address ="Boyle, Co. Roscommon, F52 HH98"
                number = "+353 083 348 8219"
                email= "morris.c.jack3@gmail.com"
            />
            </div>
           
        </div>
    );
}


export default contact;