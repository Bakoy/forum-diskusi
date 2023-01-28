/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Nama');

    await userEvent.type(nameInput, 'nameTest');
    expect(nameInput).toHaveValue('nameTest');
  });

  it('should handle Email typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    await userEvent.type(emailInput, 'emailtest');
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Passwords');

    await userEvent.type(passwordInput, 'passwordtest');

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Nama');
    await userEvent.type(nameInput, 'namatest');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest');
    const passwordInput = await screen.getByPlaceholderText('Passwords');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByRole('button', { name: 'Register' });
    await userEvent.click(registerButton);
    expect(mockRegister).toBeCalledWith({
      name: 'namatest',
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
