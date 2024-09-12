import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, message } from 'antd';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const { Option } = Select;

const ContactUsModal = ({ isModalOpen, handleCancel }) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
        services: '',
    });

    const inputChangeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value, name) => {
        setForms({ ...forms, [name]: value });
    };
    const phoneChangeHandler = (value) => {
        setForms({ ...forms, number: value });
    };

    const submitHandler = async (values) => {
        console.log('Form values:', values);

        try {
            await axios.post('/api/contact-us/route', values);
            message.success('Email sent successfully!');

            setForms({
                name: '',
                email: '',
                number: '',
                message: '',
                services: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            message.error('Failed to send email.');
        }
    };

    return (
        <>
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
                <div className="modal-text-header">
                    <h1>Free Consultation</h1>
                </div>
                <div className="modal-form-box">
                    <Form
                        initialValues={forms}
                        onFinish={submitHandler}
                        onValuesChange={(changedValues, allValues) => setForms(allValues)}
                    >
                        <div>
                            <p>Name :</p>
                        </div>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please Enter Your Name!' }]}
                        >
                            <Input
                                name="name"
                                placeholder="Enter your name "
                                value={forms.name}
                                onChange={inputChangeHandler}
                                className="custom-input"
                            />
                            {/* <span className="placeholder-text">Enter your name</span> */}
                        </Form.Item>

                        <div>
                            <p>Number :</p>
                        </div>
                        <Form.Item
                            name="number"
                            rules={[{ required: true, message: 'Please Enter Your Number!' }]}
                        >
                            <PhoneInput
                                country={'us'}
                                value={forms.number}
                                onChange={phoneChangeHandler}
                                inputClass="custom-input"
                                containerClass="phone-input-container"
                                inputStyle={{ width: '100%' }}
                            />
                        </Form.Item>

                        <div>
                            <p>Email :</p>
                        </div>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please Enter Your Email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                        >
                            <Input
                                name="email"
                                placeholder="Enter your email "
                                value={forms.email}
                                onChange={inputChangeHandler}
                                className="custom-input"
                            />
                            {/* <span className="placeholder-text">Enter your email</span> */}
                        </Form.Item>

                        <div>
                            <p>Services :</p>
                        </div>
                        <Form.Item
                            name="services"
                        >
                            <Select
                                value={forms.services || "Your Services"}
                                placeholder="Your Services"
                                onChange={(value) => selectChangeHandler(value, 'services')}
                                className="custom-select"
                            >
                                <Option value="App Development">App Development</Option>
                                <Option value="Web Development">Web Development</Option>
                                <Option value="UI/UX Design">UI/UX Design</Option>
                                <Option value="Ecommerce">Ecommerce</Option>
                            </Select>
                        </Form.Item>

                        <div>
                            <p>Project Details :</p>
                        </div>
                        <Form.Item
                            name="message"
                            rules={[{ required: true, message: 'Please Enter Your Project Details!' }]}
                        >
                            <Input.TextArea
                                name="message"
                                placeholder="Project Details"
                                value={forms.message}
                                onChange={inputChangeHandler}
                                className="custom-input textarea-custom-input"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default ContactUsModal;
