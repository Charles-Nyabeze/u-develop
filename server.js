const express = require('express')
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express()

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use apirputes
app.use('/api', apiRoutes);

//resp for bad reqs
app.use ((req, res) => {
  res.status(404).end()
})

//start server after db connection

db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});