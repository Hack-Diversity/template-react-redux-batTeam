/* eslint-disable semi */
import React from 'react';

import Card from 'react-bootstrap/Card';

import withAuthor from './withAuthor';

//mapping over covers array selection based on size?
const Author = ({authors}) =>{
  return (
    <div className="container-fluid d-flex d-block">
      {authors.map(({authors}) => {
        return(
          <div className="text-left">
          <Card.Title className="medium leftPad text-primary">{authors}</Card.Title>
          </div>
        );
        })}
      </div>
    );
};

//Const maxBooksToShow= ;
//export default withData(maxBooksToShow)(Covers);
export default withAuthor(Author);
