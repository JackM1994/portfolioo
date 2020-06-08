import React from 'react';
import './CertificationsTemplate.css';


function certificationTemplate(props){
    return(
        <div className="cert-info">
                <div className="cert-image">
                    <img className="cert-logo" src={props.image} alt="Cert" />
                </div>
                <div className="cert-title">{props.title}</div>
                <div className="cert-school">{props.school}</div>
                <span className="issued">{props.issued}</span>
        </div>
    );
}

export default certificationTemplate;