import React from 'react';

import PropTypes from 'prop-types';


interface BookDetailProps{
    id:number,
    title:string,
    author:string,
    year:number
}

const BookDetail: React.FC<BookDetailProps> = ({id,title,author,year})=> {

  return (

    <div className="book-detail">

      <h2>{title}</h2>

      <p><strong>Author:</strong> {author}</p>

      <p><strong>Year:</strong> {year}</p>

    </div>

  );

};


 

export default BookDetail;