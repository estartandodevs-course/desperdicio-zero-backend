const express = require('express');
const db = require('./config/database');
const userRouter = require('./api/routes/userRoutes');
const productRouter = require('./api/routes/productRoutes');
const categoriesRouter = require('./api/routes/categoriesRoutes');
const filterRouter = require('./api/routes/filterRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', userRouter);
app.use('/api', productRouter);
app.use('/api', categoriesRouter);
app.use('/api', filterRouter);

app.listen(PORT, () => {
	console.log(`🚀 Server is up and running on port:${PORT}`);
});

db.sync(() => console.log(`🚀 Database is Up: ${process.env.DB_NAME}`));
