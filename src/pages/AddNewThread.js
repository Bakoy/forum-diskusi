import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddNewInput from '../components/AddNewInput';
import { asyncAddThread } from '../states/thread/action';

function AddNewThread() {
  const {
    authUser = null,
  } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreate = async ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };
  return (
    <div className="w-full h-full pt-20 px-10">
      {authUser && <AddNewInput create={onCreate} />}
    </div>
  );
}

export default AddNewThread;
