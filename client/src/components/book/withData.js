//covers array
import React from 'react';

function withData(Component){
  const date = new Date().toLocaleDateString();


  const covers = [
    //reads from db file
    {
      coverImageUrlSmall:'bookPlaceHolder',
      coverImageUrlMedium:'bookPlaceHolder',
      coverImageUrlLarge:'bookPlaceHolder',
      title:"Life on Mars", //Link these to content called from db
      author:'David Bowie',
      publication: date,
      isbn:`ISBN: ${Math.floor(Math.random()*100000000)-1}`,
    },
    {
      coverImageUrlSmall:'test',
      coverImageUrlMedium:'test',
      coverImageUrlLarge:'test',
      title:'Classic Methology',
      author:'Mark Morford',
      publication:date,
      isbn:`ISBN: ${Math.floor(Math.random()*100000000)-1}`,
    },
    {
      coverImageUrlSmall:'bookPlaceHolder',
      coverImageUrlMedium:'bookPlaceHolder',
      coverImageUrlLarge:'bookPlaceHolder',
      title:'Book 2',
      author:'David Bowie',
      publication: date,
      isbn:`ISBN: ${Math.floor(Math.random()*100000000)-1}`,
    },
    {
      coverImageUrlSmall:'test',
      coverImageUrlMedium:'test',
      coverImageUrlLarge:'test',
      title:'Book 3',
      author:'Mark Morford',
      publication:date,
      isbn:`ISBN: ${Math.floor(Math.random()*100000000)-1}`,
    },

  ];

  return function (){
    //const limitedBooks = covers.slide(0, maxBooksToShow);
    return <Component covers={covers}></Component>;
    //replace covers with limitedBooks
  };
}
//}

export default withData;
