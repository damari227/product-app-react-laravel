import React, { Component } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Id(){
  const { id } = useParams();

  return (
    <Form productId={id} />
  )
}

class Form extends Component {

    submit = () => {
        const nama = document.querySelector('input[name=nama]').value;
        const harga = document.querySelector('input[name=harga]').value;
        let url;
        if(this.props.productId){
          url = 'http://localhost:8000/api/product/' + this.props.productId;
        } else {
          url = 'http://localhost:8000/api/products';
        }

        axios.post(url, {nama,harga}, {
          headers: {
            Authorization: 'Bearer ' + localStorage.token
          }
        }).then((response) => {
            console.log(response.data);
        });
    }

    componentDidMount = () => {
      const id = this.props.productId;
      if (id){
        this.getProduct(id);
      }
    }

    getProduct(id){
      axios.get('http://localhost:8000/api/product/' + id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.token
        }
      }).then((response) => {
        const product = response.data;
        console.log(product);
        document.querySelector('input[name=nama]').value = product.nama;
        document.querySelector('input[name=harga]').value = product.harga;
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

export default Id;
