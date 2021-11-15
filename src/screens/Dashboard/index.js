import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// components:
import {
  IoasysLogo,
  LogoutButton,
  BookCard,
  Modal,
  ChevronButton,
} from 'components';

// actions
import * as AUTH_ACTIONS from 'store/ducks/auth/actions';
import * as BOOKS_ACTIONS from 'store/ducks/books/actions';

// styles:
import Wrapper from './styles';

const Dashboard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const {
    auth: {
      authentication: { user },
    },
    books: {
      booksList: { list },
    },
  } = useSelector((state) => state);

  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      BOOKS_ACTIONS.booksRequest({
        page: pageNumber,
        amount: 12,
        category: 'biographies',
      })
    );
  }, [pageNumber]);

  console.log('[user]', user);

  const handleGetBookDetails = (id) => {
    dispatch(BOOKS_ACTIONS.bookDetailsRequest({ bookId: id }));
    setModalOpened(true);
  };

  const handleLogout = () => {
    dispatch(AUTH_ACTIONS.logoutRequest());
    push('/login');
  };

  const handleChangePage = (nextPage) => {
    const isEqualZero = pageNumber - 1 === 0;
    if (!nextPage && isEqualZero) {
      return;
    } else {
      setPageNumber(nextPage ? pageNumber + 1 : pageNumber - 1);
    }
  };

  return (
    <Wrapper>
      <section>
        <nav>
          <IoasysLogo color='#000' />
          <div className='user-area-container'>
            <span>
              Bem vindo, <b>{user.name}!</b>
            </span>
            <LogoutButton onClick={handleLogout} />
          </div>
        </nav>

        {list && (
          <>
            <div className='books-container'>
              {list?.data?.length > 0 &&
                list?.data?.map((book, key) => {
                  const {
                    title,
                    authors,
                    pageCount,
                    published,
                    publisher,
                    imageUrl,
                    id,
                  } = book;

                  return (
                    <BookCard
                      key={`book${key + 1}`}
                      name={title}
                      author={authors[0]}
                      pagesNumber={pageCount}
                      company={publisher}
                      publishDate={published}
                      imageUrl={imageUrl}
                      onClick={() => handleGetBookDetails(id)}
                    />
                  );
                })}
            </div>

            <div className='page-control'>
              <span>
                Página <b>{list.page}</b> de <b>{list.totalPages}</b>
              </span>
              <ChevronButton onClick={() => handleChangePage()} />
              <ChevronButton
                toRight
                onClick={() => handleChangePage('nextPage')}
              />
            </div>
          </>
        )}
      </section>

      {modalOpened && <Modal onClose={() => setModalOpened(false)} />}
    </Wrapper>
  );
};

export default Dashboard;
