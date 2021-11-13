import React from 'react';

const Specs = ({ bookSpecs }) => {
  return (
    <div className='modal-info__book-specs'>
      <span className='modal-info__book-specs__title'>ĨNFORMAÇÕES</span>

      <div className='modal-info__book-specs__content'>
        {bookSpecs.map((spec, key) => (
          <div
            key={`book-spec-${key + 1}`}
            className='modal-info__book-specs__content__row'
          >
            <span className='modal-info__book-specs__content__name'>
              {spec.name}
            </span>

            <span className='modal-info__book-specs__content__spec'>
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specs;
