import React, { useState } from 'react';
import './contact.css';

const ContactPage = () => {
    const [storeInput, setStoreInput] = useState([]);
    const [inputBox, setInputBox] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errorMsg, setErrorMsg] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputBox((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSend = () => {
        const errors = {};

        if (inputBox.name === '') {
            errors.name = 'Name is required';
        }

        if (inputBox.email === '') {
            errors.email = 'Email is required';
        }

        if (inputBox.message === '') {
            errors.message = 'Message is required';
        }

        if (Object.keys(errors).length > 0) {
            setErrorMsg(errors);
        } else {
            setStoreInput((prevData) => [...prevData, inputBox]);

            // Clear 
            setInputBox({
                name: '',
                email: '',
                message: ''
            });

            // Clear 
            setErrorMsg({});
        }
    };

    console.log({ storeInput })

    return (
        <div className='contact-container'>
            <div className='news-mail'>
                <div className='left-contact-container'>
                    <p className='news-letter'>NewsLetter</p>
                    <p className='news-desc'>Get news about articles and updates in your inbox.</p>
                </div>
                <div className='right-contact-container'>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={inputBox.name}
                            onChange={handleChange}
                            placeholder='NAME'
                            className='input-box'
                        />
                        {errorMsg.name && <p className="error-msg">*{errorMsg.name}</p>}
                    </div>
                    <div>
                        <input
                            type='email'
                            name="email"
                            value={inputBox.email}
                            onChange={handleChange}
                            placeholder='EMAIL'
                            className='input-box'
                        />
                        {errorMsg.email && <p className="error-msg">*{errorMsg.email}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="message"
                            value={inputBox.message}
                            onChange={handleChange}
                            placeholder='MESSAGE'
                            className='input-box'
                        />
                        {errorMsg.message && <p className="error-msg">*{errorMsg.message}</p>}
                    </div>
                </div>
            </div>
            <div className='get-in-touch-send'>
                <p className='get-in-touch'>GET IN TOUCH</p>
                <button className='send-button' onClick={onSend}>SEND</button>
            </div>
        </div>
    );
};

export default ContactPage;
