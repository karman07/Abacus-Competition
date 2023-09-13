import React from 'react';

function ContactUsPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3>Get in Touch</h3>
                    <p>If you have any questions or inquiries, please don't hesitate to contact us:</p>
                    <p>
                        Phone: <a href="tel:+918813917626">+918813917626</a><br />
                        Email: <a href="mailto:karmansingharora01@gmail.com">karmansingharora01@gmail.com</a>
                    </p>
                    <p>We're available during business hours to assist you.</p>
                </div>
                <div className="col-md-6">
                    <h3>Visit Us</h3>
                    <p>
                        Our Office<br />
                        A-30 Max Height,<br />
                        Sonepat, Haryana,<br />
                        India
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;