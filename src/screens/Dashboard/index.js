import React from 'react';

// components:
import { IoasysLogo, LogoutButton, BookCard, Modal } from 'components';

// styles:
import Wrapper from './styles';

const Dashboard = () => {
  return (
    <Wrapper>
      <nav>
        <IoasysLogo color='#000' />
        <div className='user-area-container'>
          <span>
            Bem vindo, <b>Guilherme!</b>
          </span>
          <LogoutButton />
        </div>
      </nav>

      <div className='books-container'>
        <BookCard
          name='Crossing the Chasm'
          author='Geoffrey A. Moore'
          pagesNumber='150'
          company='Editora Loyola'
          publishDate='2020'
        />
      </div>
      {/* <Modal /> */}
    </Wrapper>
  );
};

export default Dashboard;
