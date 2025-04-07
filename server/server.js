const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const chatRoutes = require('./routes/chat'); // ✅ make sure this path is correct

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoutes);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
