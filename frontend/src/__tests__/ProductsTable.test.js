import { render, screen } from "@testing-library/react";
import"@testing-library/jest-dom";
import ProductsTable from "../components/ProductsTable.jsx";

import { getProducts } from "../api/server-api.js";
jest.mock("../api/server-api.js");

describe('ProductsTable tests', () => {
  it('should render a Products Table', async () => {
    // Mock database interaction
    const products = [{ name: "Banana", price: 10 }];
    getProducts.mockResolvedValue(products);

    render(<ProductsTable />);
    const name = await screen.findByText("Banana");
    expect(name).toBeInTheDocument();
  });
})