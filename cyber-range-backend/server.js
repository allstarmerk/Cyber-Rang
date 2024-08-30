const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Database connection error:', err));


const simulationRoutes = require('./routes/simulationRoutes');
const authRoutes = require('./routes/authRoutes'); 

app.use('/api/simulations', simulationRoutes);
app.use('/api/auth', authRoutes); 


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

