import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleItem, updateSingleItem } from '../actions';
import { shared } from '../constants';

import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})``;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-top: 0 30px;
`;

const Label = styled.label`
    margin: 5px;
    max-width: 30%;
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;
`;

const Fieldset = styled.fieldset.attrs({
    className: 'form-control',
})`
    border-color: transparent;
    margin: 1em auto 0.5em;
    max-width: 50%;
    min-height: 6em;
`;

const YearInput = styled.input.attrs({
    className: '',
})`
    margin: 5px auto;
    text-align: center;
`;

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
  margin: 15px 15px 15px 5px;
`;

class ItemUpdate extends Component {
    constructor(props) {
        /**
         * Currently deprecated and now known as the "legacy context":
         * - https://reactjs.org/docs/legacy-context.html
         *
         * TODO: refactor to use new Context API:
         * - https://reactjs.org/docs/context.html
         */
        super(props);
        this.state = {
            isbn: "",//_id
            title: "", //name
            author: "", //daysOfWeek
            publication_year: 0,//timeframe
            copies: 0,//content
        };
    }

    componentDidMount() {
        this.props.fetchSingleItem(this.props.itemIsbn)
            .then(resp => {
                const { books } = resp.data;
                this.setState({ ...books });
            });
    }
    handleChangeInputIsbn = async event => {
        const isbn = event.target.value;
        this.setState({ isbn });
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value;
        this.setState({ title });
    }

    handleChangeInputAuthor = async event => { //author -->Timeframe switched
        const author = event.target.value;
        this.setState({ author });
    }

    handleChangeInputPublicationYear = async event => { //content
        const publication_year = event.target.value;
        this.setState({ publication_year });
    }

    handleChangeInputCopies = async event => { //content
        const copies = event.target.value;
        this.setState({ copies });
    }

    handleUpdateItem = event => {
        const {
            isbn,
            title,
            author,
            publication_year,
            copies
        } = this.state;
        const book = { isbn, title, author, publication_year, copies };

        return this.props.updateSingleItem(book)
            .then(resp => {
                console.log("handleUpdateItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item updated successfully');
                    return true;
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                window.alert(`There was an error updating the item... :(`);
                console.error("handleUpdateItem: err");
                console.error(err);
            });
    }

    confirmUpdateItem = event => {
        if (window.confirm(`Are you sure you want to update this item? ${this.state.isbn}`)) {
            return this.handleUpdateItem(event);
        }
    }

    render() {
        const {
            isbn,
            title,
            author,
            publication_year,
            copies
        } = this.state;

        const { PUBLICATION_YEAR } = shared;

        return isbn && (
            <Wrapper>
                <Title>Create Book</Title>

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />
                <Label>Author: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.handleChangeInputAuthor}
                />
                <Label>PUBLICATION YEAR: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="1000"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={publication_year}
                    onChange={this.handleChangeInputPublicationYear}
                />
                <Label>Copies: </Label>
                <InputText
                  type="number"
                  step="0.1"
                  lang="en-US"
                  min="0"
                  max="1000"
                  pattern="[0-9]+([,\.][0-9]+)?"
                    value={copies}
                    onChange={this.handleChangeInputCopies}
                />

                <Button onClick={this.confirmUpdateItem}>Update Books</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        itemIsbn: ownProps.match.params.isbn,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSingleItem, updateSingleItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemUpdate);
