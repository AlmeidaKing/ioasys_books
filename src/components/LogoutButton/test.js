import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LogoutButton from '.';

const createSut = (onClick) => {
  const renderComp = () => {
    render(<LogoutButton onClick={onClick} />);
  };
  return { renderComp };
};

describe('LogoutButton test', () => {
  it('should render component and exec a function when clicks', () => {
    const callBackFunc = () => console.log('Button clicked');

    const consoleSpy = jest.spyOn(console, 'log');

    const { renderComp } = createSut(callBackFunc);

    renderComp();

    fireEvent.click(screen.getByTestId('logout-button'));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
