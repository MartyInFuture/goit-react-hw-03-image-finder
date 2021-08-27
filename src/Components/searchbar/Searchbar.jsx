import React, { Component } from 'react';
import { SearchbarStyled } from './SearchbarStyled';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    search: '',
  };

  onHandleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.setSearch(this.state.search);
  };

  render() {
    return (
      <SearchbarStyled>
        <form className="SearchForm" onSubmit={this.onFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleChange}
          />
        </form>
      </SearchbarStyled>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  setSearch: PropTypes.func,
};
