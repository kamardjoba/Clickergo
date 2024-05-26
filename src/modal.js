import React from 'react';
import './modal.css';

const Modal = ({ onClose, onCheckSubscription }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Подпишитесь на наш канал</h2>
                <p>Для получения 5000 монет, пожалуйста, подпишитесь на наш Telegram канал.</p>
                <a href="https://t.me/your_channel_nickname" target="_blank" rel="noopener noreferrer">Перейти к каналу</a>
                <button onClick={onCheckSubscription}>Я подписался</button>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;
