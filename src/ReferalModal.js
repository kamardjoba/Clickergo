import React from 'react';
import { FaCopy } from 'react-icons/fa'; // Импортируем иконку копирования
import './ReferalModal.css';

const ReferalModal = ({ userId, referralLink, onClose }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        alert('Реферальная ссылка скопирована!');
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Ваш реферальный код</h2>
                <div className="referral-container">
                    <span className="referral-code">{referralLink}</span>
                    <button className="copy-button" onClick={handleCopy}>
                        <FaCopy className="copy-icon" />
                    </button>
                </div>
                <button className="close-button" onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default ReferalModal;
