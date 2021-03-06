import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    query: '',
    checkbox: false,
  };

  // handleQuery = (newValue) => {
  //   this.setState({
  //     query: newValue,
  //   });
  // };

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  handleCheckbox = () => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };

  render() {
    // console.log(this.props.products.data);
    console.log(this.state.checkbox);
    return (
      <h1>IronStore 🛒</h1>
      <div>
        
        <SearchBar
          query={this.state.query}
          setQuery={this.setQuery}
          checkbox={this.state.checkbox}
          handleCheckbox={this.handleCheckbox}
        />
        <br></br>
        <ProductTable
          query={this.state.query}
          products={this.props.products}
          checkbox={this.state.checkbox}
        />
      </div>
    );
  }
}
