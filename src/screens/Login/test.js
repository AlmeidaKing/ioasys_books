import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '.';

const makeSut = () => {
  const renderComp = () => {
    render(<Login />);
  };

  return { renderComp };
};

describe('Login page', () => {
  it('should render Login page text', () => {
    const { renderComp } = makeSut();

    renderComp();

    expect(screen.getByText(/Login Page/i));
  });
});
