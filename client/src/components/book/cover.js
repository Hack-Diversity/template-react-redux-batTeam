/* eslint-disable semi */
import React from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/DropdownButton';

import withData from './withData';

import icons from '../../styles/assets/bookPlaceHolder.jpeg';

//mapping over covers array selection based on size?
const Covers = ({covers}) =>{
  return (
    <div className="container-fluid d-flex d-block">
      {covers.map((
        { coverImageUrlSmall,
          coverImageUrlMedium,
          coverImageUrlLarge,
          isbn, title, publication
        }) => {
        return(
          <div className="text-left">
          <Card.Img variant="top"
            style={{width:"200px", height:"200px"}} className="img-fluid p-2"
            src = {covers.coverImageUrlMedium}
            alt={"Cover Image"} key={coverImageUrlMedium}>
          </Card.Img>
          <Card.Title className="leftPad">{title}</Card.Title>
          <Card.Title className="small leftPad">{publication}</Card.Title>
          <Card.Text className="small leftPad">{isbn}</Card.Text>
          </div>
        );
        })}
      </div>
    );
};

//Const maxBooksToShow= ;
//export default withData(maxBooksToShow)(Covers);
export default withData(Covers);
