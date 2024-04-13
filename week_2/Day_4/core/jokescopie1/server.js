const express = require('express');
const connectDB = require('./mongoose.config');
const jokesRouter = require('./routes/jokes.routes');

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Parse incoming JSON data
app.use(express.json());

// Use jokes routes
app.use('/api/jokes', jokesRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
