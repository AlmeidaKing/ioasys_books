import React from 'react';

// styles:
import Wrapper from './styles';

// containers:
import Headers from './containers/Headers';
import Specs from './containers/Specs';
import CompanyReview from './containers/CompanyReview';

// icons:
import CloseModalIcon from 'assets/icons/CloseModalIcon';

const Modal = () => {
  const bookSpecs = [
    { name: 'Páginas', value: '304 páginas' },
    { name: 'Editora', value: '' },
    { name: 'Publicação', value: '' },
    { name: 'Idioma', value: '' },
    { name: 'Título Original', value: '' },
    { name: 'ISBN-10', value: '' },
    { name: 'ISBN-13', value: '' },
  ];
  return (
    <Wrapper>
      <div className='close-button'>
        <CloseModalIcon />
      </div>

      <div className='container'>
        <div className='image' />

        <div className='modal-info'>
          <Headers />

          <Specs bookSpecs={bookSpecs} />

          <CompanyReview />
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
