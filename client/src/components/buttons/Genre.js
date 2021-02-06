import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const genre = styled.a.attrs({
    className: "AvailableBtn"
})`
  color: #ff0000;
  cursor: pointer;
  widht:20rem;
  display: inline-block;
  border-radius: 3px;
  padding: 0.3rem 1rem;
  margin: 0.5rem 1rem;
  background: blue;
  border: 2px solid blue;
`;

class Genre extends Component {
    confirmDeleteBook = event => {
        event.preventDefault();

        if (
            window.confirm(
                `Genre: ${this.props.isbn}`,
            )
        ) {
            this.props.onDelete(this.props.isbn);
        }

    }

    render() {
        return <Genre onClick={this.confirmDeleteBook}>Genre</Genre>;
    }
}

Genre.propTypes = {
    isbn: PropTypes.string,
};

export default Genre;
