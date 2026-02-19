import React, { useState } from 'react';
import '../Clones-2.css';

const LoginModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });

    if (!isOpen) return null;

    const validate = () => {
        let tempErrors = { email: '', password: '' };
        let isValid = true;

        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.password) {
            tempErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Login Successful!');
            onClose();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === 'modal') {
            onClose();
        }
    };

    return (
        <div id="loginModal" className="modal" style={{ display: 'block' }} onClick={handleOutsideClick}>
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>Login</h2>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <small className="error-msg" id="emailError">{errors.email}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <small className="error-msg" id="passwordError">{errors.password}</small>
                    </div>
                    <button type="submit" className="submit-btn" id="loginSubmitBtn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
