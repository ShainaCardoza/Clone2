import React from 'react';
import '../Clones-2.css';

const InfoModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal" style={{ display: 'block' }} onClick={(e) => e.target.className === 'modal' && onClose()}>
            <div className="modal-content" style={{ textAlign: 'center', maxWidth: '300px' }}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h3 style={{ marginTop: '20px', color: 'var(--text-dark)' }}>{message}</h3>
                <button
                    className="submit-btn"
                    onClick={onClose}
                    style={{ marginTop: '20px', width: 'auto', padding: '10px 30px' }}
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default InfoModal;
