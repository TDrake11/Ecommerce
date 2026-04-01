import { Request, Response } from "express";


export function listProducts(req: Request, res: Response) {
  res.send('the list products');
}

export function getProductById(req: Request, res: Response) {
  const id = req.params.id;
  console.log(`the id is ${id}`);
  res.send(`the product with id ${id}`);
}

export function createProduct(req: Request, res: Response) {
  res.send('create a new product');
}

export function updateProduct(req: Request, res: Response) {
  const id = req.params.id;
  console.log(`the id is ${id}`);
  res.send(`update the product with id ${id}`);
}

export function deleteProduct(req: Request, res: Response) {
  const id = req.params.id;
  console.log(`the id is ${id}`);
  res.send(`delete the product with id ${id}`);
}

