import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Delete = styled.div.attrs({
    className: "delete-item-btn"
})`
  color: #ff0000;
  cursor: pointer;
`;

class DeleteButton extends Component {
    confirmDeleteItem = event => {
        event.preventDefault();

        if (
            window.confirm(
<<<<<<< HEAD
                `Do you want to permanently delete this item? ${this.props.isbn}`,
            )
        ) {
            this.props.onDelete(this.props.isbn);
=======
                `Do you want to permanently delete this item? ${this.props.id}`,
            )
        ) {
            this.props.onDelete(this.props.id);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
        }

    }

    render() {
<<<<<<< HEAD
        return <Delete onClick={this.confirmDeleteItem}>Delete Book</Delete>;
=======
        return <Delete onClick={this.confirmDeleteItem}>Delete Item</Delete>;
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
    }
}

DeleteButton.propTypes = {
<<<<<<< HEAD
    isbn: PropTypes.string,
=======
    id: PropTypes.string,
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
};

export default DeleteButton;
