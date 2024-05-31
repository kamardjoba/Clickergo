const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Настройка приложения
const app = express();
const port = process.env.PORT;
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Подключение к базе данных MongoDB
mongoose.connect(process.env.MONGODB_URL, )
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// Создание схемы и модели пользователя
const userSchema = new mongoose.Schema({
    telegramId: { type: String, required: true, unique: true },
    coins: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    upgradeCost: { type: Number, default: 10 },
    upgradeLevel: { type: Number, default: 1 },
    coinPerClick: { type: Number, default: 1 },
    upgradeCostEnergy: { type: Number, default: 100 },
    upgradeLevelEnergy: { type: Number, default: 1 },
    clickLimit: { type: Number, default: 1000 },
    energyNow: { type: Number, default: 1000 }
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API маршруты
app.post('/api/user', async (req, res) => {
    const { telegramId } = req.body;
    let user = await User.findOne({ telegramId });
    if (!user) {
        user = new User({ telegramId });
        await user.save();
    }
    res.json(user);
});

app.put('/api/user', async (req, res) => {
    const { telegramId, userData } = req.body;
    const user = await User.findOneAndUpdate({ telegramId }, userData, { new: true });
    res.json(user);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Настройка Telegram Bot

