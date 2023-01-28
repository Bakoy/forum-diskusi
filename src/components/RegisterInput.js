import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <form>
      <input type="text" value={name} onChange={onNameChange} placeholder="Nama" className="input mb-3 input-bordered input-info w-full" />
      <input type="text" value={email} onChange={onEmailChange} placeholder="Email" className="input mb-3 input-bordered input-info w-full" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Passwords" className="input mb-3 input-bordered input-info w-full" />
      <button onClick={() => register({ name, email, password })} type="button" className="btn btn-block">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
