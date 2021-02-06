/* eslint-disable semi */
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/DropdownButton';

import Cover from './book/cover';
import Author from './book/author';
import ItemsList from '../items/ItemsList';

import Btn from './buttons/Genre';

import icons from '../styles/assets/bookPlaceHolder.jpeg';

//   const BookInformation = ({book}) => {
//
//     return
//
//       {book.map(({cover, title, author, publication, isbn}) => {
//         return  () =>
//         <Card border="light" style={{width: '12rem'}}>
//           <Card.Img variant="top" src={icons} />
//             <Card.Body style={{textAlign:'left'}}>
//               <Card.Title className="bookTitle">{title}</Card.Title>
//               <Card.Text className="bookAuthor">{author}</Card.Text>
//               <Card.Text className="bookAuthor">{publication}</Card.Text>
//               <Card.Text className="bookAuthor">{isbn}</Card.Text>
//                 <div>
//                  <DropdownButton style={{float:'right', position:'relative', marginTop:'-45px'}}
//                    as={ButtonGroup} menuAlign={{ sm: 'left' }}
//                    id="dropdown-menu-align-responsive-1">
//                    <Dropdown.Item eventKey="1"> 1</Dropdown.Item>
//                    <Dropdown.Item eventKey="2"> 2</Dropdown.Item>
//                    <Dropdown.Item eventKey="2"> 3</Dropdown.Item>
//                   </DropdownButton>
//                 </div>
//             </Card.Body>
//           </Card>
//         })};
// };
//
// const EnhancedBookComponent = withData(BookInformation);
//
// function withData(Component){
//   const book = [
//     {
//       cover: {icons},
//       title: "Life on Mars",
//       author: "David Bowie",
//       publication: Date(),
//       isbn: Math.Random()
//     }
//   ];
//   return function () {
//     <Component book={book}></Component>;
//     };
// };

//   const BookInformation = ({book}) => {
//
//     return
//
//       {book.map(({cover, title, author, publication, isbn}) => {
//         return  () =>
const Book = () =>
<React.Fragment>
  <Btn className="btn btn-warning"/>
    <Card border="light">
      <Cover />
      <Author />
      <ItemsList />
    </Card>
</React.Fragment>
export default Book;
