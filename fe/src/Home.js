import react, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount = () => {
    this.getProducts();
  }

  getProducts = () => {
    axios.get("http://localhost:8000/api/products").then((response) => {
      const products = response.data;
      this.setState({ products });
    });
  }

  delete = (event) => {
    const id = event.target.getAttribute("data-id");
    axios.post("http://localhost:8000/api/products/delete/" + id).then(() => {
      this.getProducts();
    });
  }

  render = () => {
    return (
      <div>
        <h2>Halaman product</h2>
        <div className="card">
          <div className="card-header">Table Produk</div>
          <div className="card-body">
            <NavLink to="/create" className="btn btn-secondary">
              Tambah produk
            </NavLink>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((product, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{product.nama}</td>
                    <td>{product.harga}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        data-id={product.id}
                        onClick={this.delete}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
