export default function Filters() {
  return (
    <aside className="filters">
      <h2>Filters</h2>

      <div className="filter-group">
        <h3>Category</h3>
        <ul>
          <li>
            <input type="checkbox" id="men" />
            <label htmlFor="men">Men</label>
          </li>
          <li>
            <input type="checkbox" id="women" />
            <label htmlFor="women">Women</label>
          </li>
          <li>
            <input type="checkbox" id="kids" />
            <label htmlFor="kids">Kids</label>
          </li>
        </ul>
      </div>

      <div className="filter-group">
        <h3>Price</h3>
        <ul>
          <li>
            <input type="checkbox" id="low" />
            <label htmlFor="low">Below ₹1000</label>
          </li>
          <li>
            <input type="checkbox" id="mid" />
            <label htmlFor="mid">₹1000 - ₹3000</label>
          </li>
          <li>
            <input type="checkbox" id="high" />
            <label htmlFor="high">Above ₹3000</label>
          </li>
        </ul>
      </div>
    </aside>
  )
}
