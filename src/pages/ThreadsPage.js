/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardThreads from '../components/CardThreads';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncToogleDislikeThread, asyncToogleLikeThread, asyncToogleNeutralThread } from '../states/thread/action';

function ThreadsPage() {
  const {
    thread = [],
    users = [],
    authUser = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = thread.map((itemThread) => ({
    ...itemThread,
    user: users.find((user) => user.id === itemThread.ownerId),
    authUser: authUser?.id,
  }));

  const threadFilterById = () => {
    const totalRow = threadList.filter((voteId) => voteId === authUser?.id);

    return totalRow.length;
  };

  const like = (id) => {
    threadFilterById() === 0
      ? dispatch(asyncToogleLikeThread(id))
      : dispatch(asyncToogleNeutralThread(id));
  };

  const dislike = (id) => {
    dispatch(asyncToogleDislikeThread(id));
  };

  return (
    <div className="w-full h-full py-20 px-10">
      {authUser
        && <Link to="/new" className="w-20 h-20 z-50 text-center pt-3 text-5xl fixed bottom-20 right-10 bg-blue-800 text-white rounded-full">+</Link>}
      <p className="text-5xl font-bold mb-3">Diskusi tersedia</p>
      {threadList?.map((item, index) => (
        <div key={index}>
          <CardThreads item={item} like={like} dislike={dislike} />
        </div>
      ))}
    </div>
  );
}

export default ThreadsPage;
