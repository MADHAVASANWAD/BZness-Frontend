import "../css/Nav.css";
function Afterbar() {
  return (
    <div className="nav">
      <span>Dashboard</span>
      <div className="opt">
        <span>Products</span>
        <span>Orders</span>
        <span>Inventory</span>
        <span>Category</span>
      </div>
      <div className="inner">
        <span>Profile</span>
        <span>Logout</span>
      </div>

    </div>
  )
}

export default Afterbar;