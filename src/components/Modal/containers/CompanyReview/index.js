import React from 'react';

// icons:
import QuotesIcon from 'assets/icons/QuotesIcon';

const CompanyReview = () => {
  return (
    <div className='modal-info__company-review'>
      <span className='modal-info__company-review__title'>
        RESENHA DA EDITORA
      </span>
      <span className='modal-info__company-review__review'>
        <QuotesIcon />
        The subject of “design thinking” is the rage at business schools,
        throughout corporations, and increasingly in the popular press—due in
        large part to the work of IDEO, a leading design firm, and its
        celebrated CEO, Tim Brown, who uses this book to show how the techniques
        and strategies of design belong at every level of business.
      </span>
    </div>
  );
};

export default CompanyReview;
