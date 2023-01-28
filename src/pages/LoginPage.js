import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return (
    <div className="w-full h-full pt-20 px-10">
      <LoginInput login={onLogin} />
      <p className="text-lg mt-3">
        Belum punya akun?
        <Link to="/register" className="text-blue-600">Daftar di sini.</Link>
      </p>
    </div>
  );
}

export default LoginPage;
