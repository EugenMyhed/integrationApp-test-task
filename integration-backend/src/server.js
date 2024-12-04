import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const WORKSPACE_KEY = process.env.WORKSPACE_KEY;
const WORKSPACE_SECRET = process.env.WORKSPACE_SECRET;

if (!WORKSPACE_KEY || !WORKSPACE_SECRET) {
    throw new Error('WORKSPACE_KEY or WORKSPACE_SECRET is missing in .env file');
}

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

function generateJwtToken(customerId, customerName) {
    const tokenData = {
        id: customerId,
        name: customerName,
        fields: {
            role: 'user',
        },
    };

    const options = {
        issuer: WORKSPACE_KEY,
        expiresIn: '2h',
        algorithm: 'HS512',
    };

    return jwt.sign(tokenData, WORKSPACE_SECRET, options);
}

app.get('/api/get-token', (req, res) => {
    const customerId = req.query.customerId || 'default_customer';
    const customerName = req.query.customerName || 'Default Name';

    try {
        const token = generateJwtToken(customerId, customerName);
        res.json({ token });
    } catch (error) {
        console.error('Error generating token:', error);
        res.status(500).json({ error: 'Failed to generate token' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
