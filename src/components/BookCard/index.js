import React from 'react';

// styles:
import Wrapper from './styles';

const BookCard = ({ name, author, pagesNumber, company, publishDate }) => {
  return (
    <Wrapper>
      <div className='image' />

      {/* book headers */}
      <div className='book-info'>
        <div className='book-info__headers'>
          <span className='book-info__headers__title'>{name}</span>
          <span className='book-info__headers__author'>{author}</span>
        </div>

        {/* book description */}
        <div className='book-info__descriptions'>
          <span>{pagesNumber} páginas</span>
          <span>{company}</span>
          <span>Publicado em {publishDate}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default BookCard;
