import React from 'react';
import { render, screen } from '@testing-library/react';
import BookCard from '.';

const makeSut = (name, author, pagesNumber, company, publishDate) => {
  const renderComp = () => {
    render(
      <BookCard
        name={name}
        author={author}
        pagesNumber={pagesNumber}
        company={company}
        publishDate={publishDate}
      />
    );
  };

  return { renderComp };
};

describe('BookCard test', () => {
  it('should render informative texts', () => {
    const name = 'Crossing the Chasm';
    const author = 'Geoffrey A. Moore';
    const pagesNumber = '150';
    const company = 'Editora Loyola';
    const publishDate = '2020';

    const { renderComp } = makeSut(
      name,
      author,
      pagesNumber,
      company,
      publishDate
    );

    renderComp();

    expect(screen.getAllByText(name));
    expect(screen.getAllByText(author));
    expect(screen.getAllByText(`${pagesNumber} páginas`));
    expect(screen.getAllByText(company));
    expect(screen.getAllByText(`Publicado em ${publishDate}`));
  });
});
