import React, { Fragment, useEffect, useState } from 'react';
import { getProducts } from "../api/server-api.js";
import Grid from "@mui/material/Grid";
import ProductCard from './ProductCard';

/**
 * Creates a Grid with ProductsCards
 * @returns {React.Component} - ProductsTable
 */
export default function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products data from the server
    getProducts()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.log(error);
      })
  });

  return (
    <Fragment>
      <Grid container spacing={3}>
        {products.map((product, index) =>
          <Grid item xs={6} key={index}>
            <ProductCard
              src={product.src}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
}