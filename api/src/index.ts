import express  from 'express';
import productsRouter from './routers/products/index.js';

const port = 3000;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World Tan!');
});

app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});