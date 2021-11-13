import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

const createSut = (children, onClick) => {
  const renderComp = () => {
    render(<Button onClick={onClick}>{children}</Button>);
  };
  return { renderComp };
};

describe('Button test', () => {
  it('should render component and exec a function when clicks', () => {
    const callBackFunc = () => console.log('Button clicked');
    const children = 'Entrar';

    const consoleSpy = jest.spyOn(console, 'log');

    const { renderComp } = createSut(children, callBackFunc);

    renderComp();

    fireEvent.click(screen.getByRole('button', { name: children }));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
