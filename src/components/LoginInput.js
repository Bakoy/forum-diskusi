import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <form>
      <input type="text" value={email} onChange={onEmailChange} placeholder="Email" className="input input-bordered input-info w-full" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Passwords" className="input my-3 input-bordered input-info w-full" />
      <button onClick={() => login({ email, password })} type="button" className="btn btn-block">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
