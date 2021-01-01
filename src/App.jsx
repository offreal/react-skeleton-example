import React from 'react';
import Users from './components/Users';

export const App = () => {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid justify-content-center">
            <h1 className="text-light">Skeleton example</h1>
          </div>
        </nav>
      </header>
      <Users />
    </React.Fragment>
  );
}

export default App;
