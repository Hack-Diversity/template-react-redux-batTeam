import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';
import  ItemInsert  from './ItemInsert';

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

const Fieldset = styled.fieldset.attrs({
    className: 'form-control',
})`
    background-color: transparent;
    border-color: transparent;
    margin: 1em auto 0.5em;
    max-width: 50%;
    min-height: 6em;
    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;

class ItemsList extends Component {

    componentDidMount() {
        console.log("ItemsList: props");
        console.log(this.props);
        // if (((this.props.itemData || {}).items || []).length) return;

        this.props.fetchAllItems()
    }

    handleRemoveItem = data => {
        const itemIsbn = data;

        this.props.deleteSingleItem(itemIsbn)
            .then(resp => {
                console.log("handleRemoveItem: resp");
                console.log(resp);
                this.props.fetchAllItems();
            });
    }

    render() {
        const {
            books,
            loaded,
            loading
        } = this.props.itemData || {};
        console.log(books);

        const columns = [
            {
                Header: 'ISBN',
                accessor: 'isbn',
                filterable: true,
                Cell: props => {
                    const {original} = props.cell.row;
                    return (
                        <span data-item-isbn={original.isbn}>
                            {original.value}
                        </span>
                    )
                }
            },
            {
                Header: 'TITLE',
                accessor: 'title',
                filterable: true,
                Cell: props => {
                    const {original} = props.cell.row;
                    return (
                        <span data-title={original.title}>
                            {original.value}
                        </span>
                    );
                }
            },
            {
                Header: 'AUTHOR',
                accessor: 'author',
                filterable: true,
                Cell: props => {
                    const {original} = props.cell.row;
                    return (
                        <span data-title={original.author}>
                            {original.value}
                        </span>
                    );
                }
            },
            {
                Header: 'PUBLICATION YEAR',
                accessor: 'publication_year',
                Cell: props => {
                    const {original} = props.cell.row;
                    return (
                        <span data-publication_year={original.publication_year}>
                            {original.value || 0}
                        </span>
                    );
                },
            },
            {
                Header: 'COPIES',
                accessor: 'copies',
                filterable: true,
                Cell: props => {
                  const {original} = props.cell.row;
                    return (
                        <span data-copies={original.copies}>
                            {original.value}
                        </span>
                    );
                },
            },
            {
                Header: 'IMAGE',
                accessor: 'image_url_m',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-image={props.original.coverImageUrlMedium}>
                            {props.value}
                        </span>,
                        <Link
                            data-update-isbn={props.original.isbn}
                            to={`/book/update/${props.original.isbn}`}
                        >
                            Update Book
                        </Link>
                    );
                }
            },
            {
                Header: 'Update',
                accessor: '_update',
                Cell: props => {
                  const {original} = props.cell.row;
                      return (
                        <Link
                            data-update-isbn={original.isbn}
                            to={`/book/update/${original.isbn}`}
                        >
                            Update Book
                        </Link>
                    );
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: props => {
                    return (
                        <span data-delete-isbn={props.original.isbn}>
                            <DeleteButton
                                isbn={props.original.isbn}
                                onDelete={this.handleRemoveItem}
                            />
                        </span>
                    );
                },
            },
        ];

        return (
            <Wrapper>
                {(
                    (books || []).length < 1 // defeats the purpose of using `isLoading` prop?
                ) ? (
                        <ReactTable
                            data={books}
                            columns={columns}
                            isLoading={(loaded && loading)}
                            defaultPageSize={20}
                            showPageSizeOptions={true}
                            minRows={20}
                        />
                    ) : (
                        "List books Empty"
                    )}
            </Wrapper>
        );
    }

}

const mapStateToProps = state => {
    return {
      ...state
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
