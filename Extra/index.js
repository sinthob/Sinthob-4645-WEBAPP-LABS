import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

//start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});