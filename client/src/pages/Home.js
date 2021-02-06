/* eslint-disable semi */
import React, { Component } from "react";
import ItemsTable from "../items/ItemsTable";
import ItemsInsert from "../items/ItemInsert";
import ItemsList from "../items/ItemsList";
import ItemUpdate from "../items/ItemUpdate";
import Book from '../components/Book';
import AddBooks from '../pages/AddBooks';
import Booked from '../components/Booked';


class Home extends Component{
  render(){
    return (
      <Book />
  )};

}


export default Home;
