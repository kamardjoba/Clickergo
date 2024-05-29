const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/coinGame');

const userSchema = new mongoose.Schema({
    userId: String,
    telegramId: String,
    coins: Number,
    clicks: Number
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { telegramId } = req.body;
    const userId = uuidv4();
    const newUser = new User({ userId, telegramId, coins: 0, clicks: 0 });
    await newUser.save();
    res.json({ userId });
});

app.post('/save', async (req, res) => {
    const { userId, coins, clicks } = req.body;
    const user = await User.findOne({ userId });
    if (user) {
        user.coins = coins;
        user.clicks = clicks;
        await user.save();
        res.send('Data saved');
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/load/:userId', async (req, res) => {
    const user = await User.findOne({ userId: req.params.userId });
    if (user) {
        res.json({ coins: user.coins, clicks: user.clicks });
    } else {
        res.status(404).send('User not found');
    }
});

app.post('/webhook', async (req, res) => {
    const { message } = req.body;
    if (message && message.from) {
        const telegramId = message.from.id;
        // Проверяем, существует ли пользователь
        let user = await User.findOne({ telegramId });
        if (!user) {
            // Регистрируем нового пользователя
            const userId = uuidv4();
            user = new User({ userId, telegramId, coins: 0, clicks: 0 });
            await user.save();
            res.send(`Welcome! Your user ID is ${userId}`);
        } else {
            res.send(`Welcome back! Your user ID is ${user.userId}`);
        }
    } else {
        res.sendStatus(400);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

