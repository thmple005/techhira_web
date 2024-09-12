import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { message } from 'antd';


const Contact = () => {


    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    // const submitHandler = e => {
    //     e.preventDefault();
    //     if (validator.allValid()) {
    //         validator.hideMessages();
    //         setForms({
    //             name: '',
    //             email: '',
    //             subject: '',
    //             message: ''
    //         })
    //     } else {
    //         validator.showMessages();
    //     }
    // };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (validator.allValid()) {
            try {
                const response = await axios.post('/api/sendemail', forms);
                message.success('Email sent successfully!')
                
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                validator.hideMessages();
            } catch (error) {
                console.error('Error sending email:', error);
                message.error('Failed to send email.')
            }
        } else {
            validator.showMessages();
        }
    };


    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            className="form-control"
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name" />
                    </div>
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>
                <div className="col col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            className="form-control"
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            name="subject"
                            placeholder="subject"
                            >
                            {/* <option>Ready to Start Your Project Lets Talk</option>
                            <option>Interested in Collaboration</option> */}
                        </input>
                        {validator.message('subject', forms.subject, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col fullwidth col-lg-12">
                    <textarea
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn"> Submit Now</button>
            </div>
        </form>
    )
}

export default Contact;