require("dotenv").config();
const express = require('express');
const router = require("./routes/routes");


const app = express();

const PORT = process.env.APP_PORT || 3003;

app.use('/api', router)

app.listen(PORT, () => {
   console.log(`🚀 Server is running on port ${PORT}`);
});