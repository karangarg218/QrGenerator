const express = require('express');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/generate', async (req, res) => {
    try {
        const { name, age, gender } = req.body;
        const combinedData = `Name: ${name}, Age: ${age}, Gender: ${gender}`;
        const qrCodeData = await QRCode.toDataURL(combinedData); // Use combinedData here
        res.json({ qrCodeData });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
