import React from 'react';
import { Button } from 'react-bootstrap';
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
        <Link to="/register">
          <Button variant="primary" size="sm" className="mx-2">
            Daftar di sini.
          </Button>
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
