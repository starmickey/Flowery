import Container from '@mui/material/Container';
import Header from '../components/ui/Header';
import ProductsTable from '../components/ProductsTable';

/**
 * Webpage where products offer is shown
 * @returns {React.Component}
 */
export default function ProductsPage() {
  return (
    <>
      <Container maxWidth="lg">
        <header>
          <Header title="Products page" />
        </header>
        <main>
          <ProductsTable />
        </main>
      </Container>
    </>
  )
}
