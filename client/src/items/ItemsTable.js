import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTable } from 'react-table';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';
import ItemInsert from "../items/ItemInsert";
import ItemsList from "../items/ItemsList";

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/DropdownButton';


import MaUTable from '@material-ui/core/Table'
import {
    CssBaseline,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';

import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    @media screen and (max-width: 420px) {
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
`;

const Table = ({ columns, data }) => {
    const {
        getTableProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
      columns,
      data
    });

    return (
        <MaUTable {...getTableProps()}> //card
            <TableHead> //card title
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead> //card body
            <TableBody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow
                            data-row-item-isbn={row.values.isbn}
                            {...row.getRowProps()}
                        >
                            {row.cells.map(cell => {
                                return (
                                    <TableCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </MaUTable>
    )
};

class ItemsTable extends Component {

    componentDidMount() {
        console.log("ItemsList: props");
        console.log(this.props);
        if ((((this.props.itemData || {}) || []).length)) return;

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
                console.log(props);
                const { original } = props.cell.row;
                  return (
                      <span data-item-isbn={original.isbn}>
                          {props.original.isbn}
                      </span>
                  )
              }
          },
              {  Header: 'TITLE',
                accessor: 'title',
                // filterable: true,
                Cell: props => {
                    console.log(props);
                    const { original } = props.cell.row;
                    return (
                        <span data-item-title={original.title}>
                            {props.value}
                        </span>
                    )
                }
            },
            {
                Header: 'Author',
                accessor: 'author',
                // filterable: true,
                Cell: props => {
                    const { original } = props.cell.row;
                    return (
                        <span data-author={original.author}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'PUBLICATION YEAR',
                accessor: 'publication_year',
                // filterable: true,
                Cell: props => {
                    const { original } = props.cell.row;
                    return (
                        <span data-author={original.author}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'IMAGE URL',
                accessor: 'image_url_m',
                // filterable: true,
                Cell: props => {
                    const { original } = props.cell.row;
                    return (
                        <span data-isbn={original.isbn}>
                            {props.value}
                        </span>
                    );
                },
            },
            {
                Header: 'COPIES',
                accessor: 'copies',
                Cell: props => {
                    const { original } = props.cell.row;
                    return (
                        <span data-copies={original.copies}>
                            {props.value || "0"}
                        </span>
                    );
                },
            },
            {
                Header: 'Update',
                accessor: '_update',
                Cell: props => {
                    const { original } = props.cell.row;
                    return (
                        <Link
                            data-update-isbn={original.isbn}
                            to={`/item/update/${props.value}`}
                        >
                            Update Item
                        </Link>
                    );
                },
            },
            {
                Header: 'Delete',
                accessor: '_delete',
                Cell: props => {
                    const { original } = props.cell.row;
                    return (
                        <span data-delete-isbn={original.isbn}>
                            <DeleteButton
                                isbn={original.isbn}
                                onDelete={this.handleRemoveItem}
                            />
                        </span>
                    );
                },
            },
        ];

        return (
            <Wrapper>
                <CssBaseline />
                {(
                    (books || []).length > 1
                ) ? (
                    <Table
                        data={books}
                        columns={columns}
                        isLoading={(loaded && loading)}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={10}
                    />
                ) : (
                  `Renders Books Table(`
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable);
