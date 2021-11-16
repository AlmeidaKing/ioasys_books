import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '.';

const createSut = (
  value,
  onChangeText,
  label,
  placeholder,
  errorMessage,
  type
) => {
  const renderComp = () => {
    render(
      <Input
        value={value}
        onChangeText={onChangeText}
        label={label}
        placeholder={placeholder}
        errorMessage={errorMessage}
        type={type}
      />
    );
  };

  return { renderComp };
};

describe('Input test', () => {
  it('should render component', () => {
    let emailTest = 'teste@email.com';

    const { renderComp } = createSut(
      emailTest,
      (value) => (emailTest = value),
      'Email',
      'books@ioasys.com.br',
      'Email e/ou senha incorretos.',
      'text'
    );

    renderComp();

    expect(screen.getByPlaceholderText('books@ioasys.com.br'));
  });
});
