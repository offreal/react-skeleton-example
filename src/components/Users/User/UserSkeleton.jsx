import React from 'react';

import './User.scss';

const UserSkeleton = () => {
  return (
    <div className="user">
      <div className="avatar">
        <div className="image-wrapper skeleton">
          <div className="image skeleton" />
        </div>
      </div>
      <div className="info">
        <p className="name skeleton"></p>
        <p className="email skeleton"></p>
      </div>
    </div>
  )
}

export default UserSkeleton;
