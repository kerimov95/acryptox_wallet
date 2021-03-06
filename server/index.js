const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api', require('./src/routes'))

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})
