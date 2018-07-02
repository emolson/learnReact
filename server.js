const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/health', (req, res) => {
    res.send({"status":"up"});
});

app.listen(port, () => console.log(`Listening on port ${port}`));