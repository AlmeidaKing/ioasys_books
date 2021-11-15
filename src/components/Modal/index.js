import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// styles:
import Wrapper from './styles';

// containers:
import Headers from './containers/Headers';
import Specs from './containers/Specs';
import CompanyReview from './containers/CompanyReview';

// icons:
import CloseModalIcon from 'assets/icons/CloseModalIcon';

const Modal = ({ onClose }) => {
  const [bookSpecs, setBookSpecs] = useState([
    { name: 'Páginas', value: '' },
    { name: 'Editora', value: '' },
    { name: 'Publicação', value: '' },
    { name: 'Idioma', value: '' },
    { name: 'Título Original', value: '' },
    { name: 'ISBN-10', value: '' },
    { name: 'ISBN-13', value: '' },
  ]);

  const {
    books: {
      bookDetails: { details },
    },
  } = useSelector((state) => state);

  useEffect(() => {
    if (details) {
      setBookSpecs([
        { name: 'Páginas', value: details.pageCount },
        { name: 'Editora', value: details.publisher },
        { name: 'Publicação', value: details.published },
        { name: 'Idioma', value: details.language },
        { name: 'Título Original', value: details.title },
        { name: 'ISBN-10', value: details.isbn10 },
        { name: 'ISBN-13', value: details.isbn13 },
      ]);
    }
  }, [details]);

  return (
    <Wrapper>
      {details && (
        <>
          <div className='close-button' onClick={onClose}>
            <CloseModalIcon />
          </div>

          <div className='container'>
            <img className='image' src={details.imageUrl} />

            <div className='modal-info'>
              <Headers
                title={details.title}
                authors={details.authors.join(', ')}
              />

              <Specs bookSpecs={bookSpecs} />

              <CompanyReview description={details.description} />
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Modal;
