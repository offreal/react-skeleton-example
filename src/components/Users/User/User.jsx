import React from 'react';

import './User.scss';

const User = ({ name, email, avatar }) => {
  return (
    <div className="user">
      <div className="avatar">
        <div className="image-wrapper">
          <img className="image" src={avatar} alt={name} />
        </div>
      </div>
      <div className="info">
        <p className="name">{name}</p>
        <a className="email" href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  )
}

export default User;
