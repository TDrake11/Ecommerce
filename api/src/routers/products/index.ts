import e, { Router } from 'express';
// products endpoint
const productsRouter = Router();

productsRouter.get('/', (req, res) => {
  res.send('the list of products');
});
productsRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(`the id is ${id}`);
  res.send(`the product with id ${id}`);
});
productsRouter.post('/', (req, res) => {
  res.send('create a new product');
});

export default productsRouter;