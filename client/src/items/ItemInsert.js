import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertSingleItem } from '../actions';
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
    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;
    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
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

const YearInput = styled.input.attrs({
    className: '',
})`
    margin: 5px 5px 5px auto;
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

class ItemInsert extends Component {
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
            isbn: '',
            title:'',
            author: '',
            publication_year: 0,
            image_url_m: '',
            copies: 0,
        };
    }

    handleChangeInputIsbn = async event => {
        const isbn = event.target.value;
        this.setState({ isbn });
    }
    handleChangeInputTitle = async event => {
        const title = event.target.value;
        this.setState({ title });
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value;//timeframeNote
        this.setState({ author });
    }

    handleChangeInputPublicationYear = async event => {
        const publication_year = event.target.validity.valid
            ? event.target.value
            : this.state.publication_year;

        this.setState({ publication_year });//priority
    }

    handleChangeInputImageUrlMedium = async event => {
        const image_url_m = event.target.value;
        this.setState({ image_url_m });
    }

    handleChangeInputCopies = async event => {
        const copies = event.target.value;
        this.setState({ copies });
    }

    handleChangePub = async event => {
        const { checked, value } = event.target;
        const { publication_year } = this.state;
        const { PUBLICATION_YEAR } = shared;//DAYS_OF_WEEK

        if (checked && !publication_year[value]) {
            publication_year[value] = PUBLICATION_YEAR[value];
        } else if (!checked && publication_year[value]) {
            delete publication_year[value];
        }
        this.setState({ publication_year });
    }

    handleInsertItem = event => {
        event.preventDefault();

        const {
          isbn,
          title,
          author,
          publication_year,
          image_url_m,
          copies,
        } = this.state;
        const book = {
          isbn,
          title,
          author,
          publication_year,
          image_url_m,
          copies,
        };

        this.props.insertSingleItem(book)
            .then(resp => {
                console.log("handleInsertItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status > 100 && resp.status >= 100)) {
                    window.alert('Book inserted successfully');
                    this.setState({
                      isbn: "",
                      title: "",
                      author: "",
                      publication_year: 0,
                      image_url_m: "",
                      copies: 0,
                    });
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                return{
                  hasErrored: true,
                  message: err.message
                };
            })
    }

    render() {
        const {
          isbn,
          title,
          author,
          publication_year,
          image_url_m,
          copies,
        } = this.state;

        const { PUBLICATION_YEAR } = shared;//Days ot Week used in FieldSet

        return (
            <Wrapper>
                <Title>Add A Book</Title>

                <Label>ISBN: </Label>
                <InputText
                    type="text"
                    value={isbn}
                    onChange={this.handleChangeInputIsbn}
                />

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

                <Label>Publication Year: </Label>
                <InputText
                    type="date"
                    defaultValue="0000"
                    format = "YYYY"
                    value={publication_year}
                    onChange={this.handleChangeInputPublicationYear}
                />

                <Label>Copies: </Label>
                <InputText
                    type="number"
                    lang="en-US"
                    min="0"
                    pattern="[0-9]+([,\.][0-9])"
                    value={copies}
                    onChange={this.handleChangeInputCopies}
                />

                <Label>Cover Image: </Label>
                  <div style={{width:"20px", height:"20px"}} className="img-fluid p-2">
                  <img src={image_url_m}
                    onChange={this.handleChangeInputImageUrlMedium}
                    />
                </div>

                <Fieldset>
                    <legend>YEAR: </legend> //map books with this.
                    {Object.keys(publication_year).map((book, i) => (
                        <React.Fragment
                            key={book.publication_year} //maps to whatever is indicated after item
                        >
                            <Label
                                htmlFor={book.publication_year}
                            >
                                <YearInput
                                    type="checkbox"
                                    id={publication_year}
                                    value={publication_year}
                                    onChange={publication_year.handleChangeInputPublicationYear}
                                    checked={typeof publication_year[book] === "string"}
                                />
                                { publication_year[book] }
                            </Label>
                        </React.Fragment>
                    ))}
                </Fieldset>

                <Button onClick={this.handleInsertItem}>Add Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ insertSingleItem }, dispatch);

export default connect(null, mapDispatchToProps)(ItemInsert);
