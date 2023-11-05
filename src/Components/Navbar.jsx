const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="badge bg-light text-dark">News-Monkey</span>
        </a>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCategory("technology")}
        >
          Technology
        </button>
        <button
          type="button"
          onClick={() => setCategory("business")}
          className="btn btn-secondary"
        >
          Business
        </button>
        <button
          type="button"
          onClick={() => setCategory("health")}
          className="btn btn-success"
        >
          Health
        </button>
        <button
          type="button"
          onClick={() => setCategory("science")}
          className="btn btn-danger"
        >
          Science
        </button>
        <button
          type="button"
          onClick={() => setCategory("sports")}
          className="btn btn-warning"
        >
          Sports
        </button>
        <button
          type="button"
          onClick={() => setCategory("entertainment")}
          className="btn btn-info"
        >
          Entertainment
        </button>
      </div>
    </nav>
  )
}

export default Navbar
