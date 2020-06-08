import React from 'react';
import './Certifications.css';
import TreehouseLogo from '../../assests/icons/treehouse-logo.svg';
import UdemyLogo from '../../assests/icons/udemy-logo.svg';
import CertificationTemplate from './CertificationsTemplate';

const certifications = () => {
    return(
        <div className="certifications">
            <h2 className="cert-title">Certifications</h2>
            <div className="block"></div>
            <CertificationTemplate 
                image= {TreehouseLogo}
                title = "Front-End Development"
                school ="Treehouse"
                issued ="Dec 2019"
            />
            <CertificationTemplate 
                image= {TreehouseLogo}
                title = "FullStack JavaScript"
                school ="Treehouse"
                issued ="April 2020"
            />
            <CertificationTemplate 
                image= {UdemyLogo}
                title= "React The Complete Guide"
                school= "Udemy"
                issued= "June 2020"
            />

            
        </div>
    );
}

export default certifications;