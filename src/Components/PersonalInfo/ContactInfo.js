import React from 'react';
import './Contact-info.css';


function ContactInfo(props){
    return(
        <div className="contact-info">
                <div className="contact-details">{props.name}</div>
                <div className="contact-details">{props.street}</div>
                <div className="contact-details">{props.address}</div>
                <div className="contact-details">{props.number}</div>
                <div className="contact-details">{props.email}</div>
            
        </div>
    );
}

export default ContactInfo;