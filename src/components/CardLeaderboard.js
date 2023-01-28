/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function CardLeaderboard({ item }) {
  const { user, score } = item;
  return (
    <div className="card card-side bg-warning shadow-xl p-3 flex justify-between items-center mb-3">
      <div className="flex items-center">
        <div className="avatar placeholder mr-3">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
            <img src={user?.avatar} alt={user?.name} />
          </div>
        </div>
        <p className="text-lg font-bold text-white">{user?.name}</p>
      </div>
      <p className="stat-value text-white">{score}</p>
    </div>
  );
}

CardLeaderboard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardLeaderboard;
