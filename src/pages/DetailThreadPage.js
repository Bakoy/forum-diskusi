/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import CardThreadsDetail from '../components/CardThreadsDetail';
import Komentar from '../components/Komentar';
import KomentarInput from '../components/KomentarInput';
import { asyncCommantThread, asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailThreadPage() {
  const { id } = useParams();

  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  const submitComment = (content) => {
    dispatch(asyncCommantThread(id, content));
  };

  return (
    <div className="w-full h-full py-20 px-10">
      <CardThreadsDetail threadDetail={threadDetail} />
      <div>
        <p>Beri komentar</p>
        {authUser
          ? <KomentarInput submitComment={submitComment} />
          : (
            <>
              <Link to="/login" className="btn">Login</Link>
              {' '}
              untuk memberi komentar
            </>
          )}
      </div>
      <div>
        <p>
          Komentar (
          {threadDetail.comments.length}
          )
        </p>
        {threadDetail.comments.map((item, index) => (
          <div key={index}>
            <Komentar item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailThreadPage;
