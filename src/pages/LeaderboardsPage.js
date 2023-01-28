/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardLeaderboard from '../components/CardLeaderboard';
import { asyncReceiveLeaderboard } from '../states/leaderboards/action';

function LeaderboardsPage() {
  const { leaderboards } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  return (
    <div className="w-full h-full py-20 px-10">
      <p className="text-5xl font-bold mb-3">Klasmen Pengguna Aktif</p>
      {leaderboards?.map((item, index) => (
        <div key={index}>
          <CardLeaderboard item={item} />
        </div>
      ))}
    </div>
  );
}

export default LeaderboardsPage;
