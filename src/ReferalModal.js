import React from 'react';
import { FaCopy } from 'react-icons/fa'; // Импортируем иконку копирования
import './ReferalModal.css';

const ReferalModal = ({ userId, onClose }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(userId);
        alert('Реферальный код скопирован!');
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Ваш реферальный код</h2>
                <p className="referral-code">{userId}</p>
                <button className="copy-button" onClick={handleCopy}>
                    <FaCopy className="copy-icon" /> Скопировать код
                </button>
                <button className="close-button" onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default ReferalModal;
