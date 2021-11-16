import React from 'react';

// icons:
import QuotesIcon from 'assets/icons/QuotesIcon';

const CompanyReview = ({ description }) => {
  return (
    <div className='modal-info__company-review'>
      <span className='modal-info__company-review__title'>
        RESENHA DA EDITORA
      </span>
      <span className='modal-info__company-review__review'>
        <QuotesIcon />
        {description}
      </span>
    </div>
  );
};

export default CompanyReview;
