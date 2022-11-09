const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const userRouter = require('./api/routes/user-routes');
const productRouter = require('./api/routes/product-routes');
const categoriesRouter = require('./api/routes/categories-routes');
const filterRouter = require('./api/routes/filter-routes');
const healthchecker = require('./api/routes/healthcheck');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const app = express();
const PORT = 3000;

app.use(cors({
	origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', userRouter);
app.use('/api', productRouter);
app.use('/api', categoriesRouter);
app.use('/api', filterRouter);
app.use('/api', healthchecker);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
	console.log(`🚀 Server is up and running on port:${PORT}`);
});

db.sync(() => console.log(`🚀 Database is Up: ${process.env.DB_NAME}`));
