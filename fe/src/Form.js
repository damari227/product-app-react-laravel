import React, { Component } from "react";
import axios from 'axios';


class Form extends Component {

    submit(){
        const nama = document.querySelector('input[name=nama]').value;
        const harga = document.querySelector('input[name=harga]').value;
        axios.post('http://localhost:8000/api/products', {
            nama,
            harga
        }).then((response) => {
            console.log(response.data);
        });
    }

  render() {
    return (
      <div className="card">
        <form>
          <div className="card-header">Form</div>
          <div className="card-body">
              <div className="form-group">
                  <label>Nama produk</label>
                  <input className="form-control" name="nama" />
              </div>
              <div className="form-group">
                  <label>Harga produk</label>
                  <input className="form-control" name="harga" />
              </div>
          </div>
          <div className="card-footer">
              <div className="text-right">
                  <button className="btn btn-light" type="button" onClick={this.submit}>Kirim</button>
              </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
