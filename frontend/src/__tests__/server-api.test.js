import { getProducts } from "../api/server-api.js";

describe('Get Products tests', () => { 
  it('Should return an array of formatted products', async () => {
    const products = await getProducts();

    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThan(0);

    const product = products[0];
    expect(product.name).toBeDefined();
    expect(product.price).toBeDefined();
    expect(product.description).toBeDefined();
  });
 })