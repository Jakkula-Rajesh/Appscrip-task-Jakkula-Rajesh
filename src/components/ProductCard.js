export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">₹ {Math.round(product.price * 80)}</p>
    </article>
  )
}
