import React from 'react';

export default function SearchBar(props) {
  handlerChange = (event) => {
    this.props.setQuery(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        // name="query"
        id="search"
        value={props.query}
        // onChange={this.handlerChange}
      />
    </div>
  );
}