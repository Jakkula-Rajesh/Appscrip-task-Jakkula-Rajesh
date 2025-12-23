import Header from '../components/Header'
import Filters from '../components/Filters'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import '../styles/plp.css'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store'
  })
  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <Header />
      <main className="plp-layout">
        <Filters />
        <section className="products-section">
          <h1>Products</h1>
          <ProductGrid products={products} />
        </section>
      </main>
      <Footer />
    </>
  )
}
