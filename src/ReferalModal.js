import React from 'react';
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
                <p>{userId}</p>
                <button onClick={handleCopy}>Скопировать код</button>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default ReferalModal;
