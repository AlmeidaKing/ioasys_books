import React from 'react';

const Headers = ({ title, authors }) => {
  return (
    <div className='modal-info__headers'>
      <span className='modal-info__headers__title'>{title}</span>
      <span className='modal-info__headers__authors'>{authors}</span>
    </div>
  );
};

export default Headers;
