/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function Komentar({ item }) {
  return (
    <div className="card card-side bg-warning shadow-xl p-3 flex flex-col mb-3 text-white">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img width={40} src={item.owner.avatar} alt={item.owner.name} />

          <p className="ml-3 text-2xl font-bold">{item.owner.name}</p>
        </div>
        <p>{postedAt(item.createdAt)}</p>
      </div>
      <p className="my-3">{ item.content}</p>
      <div className="flex flex-wrap">
        <div className="mr-3 flex items-center">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
            <path d="M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z" />
          </svg>
          <p className="ml-1">{item.upVotesBy.length}</p>
        </div>
        <div className="mr-3 flex items-center">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
            <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z" />
          </svg>
          <p className="ml-1">{item.downVotesBy.length}</p>
        </div>
      </div>
    </div>
  );
}

Komentar.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Komentar;
