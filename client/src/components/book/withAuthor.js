//covers array
import React from 'react';

function withAuthor(Component){
  const authors = [
      {
        author:'David Bowie',
      },
      {
        author:'Mark Morford',
      },

  ];

  return function (){
    return <Component authors={authors}></Component>;
  };
}
//}

export default withAuthor;
