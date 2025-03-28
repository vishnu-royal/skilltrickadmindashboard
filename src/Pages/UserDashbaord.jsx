import React from 'react';

const UserDashboard = () => {
  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="page-header-title">User Dashboard</h1>
            </div>
            {/* End Row */}
          </div>
          {/* End Page Header */}

          {/* Stats */}
          <div className="row">
            <div className="col-sm-4 mb-3 mt-3">
              <div className="card card-hover-shadow h-100">
                <div className="card-body">
                  <h6 className="card-subtitle">Total Registered Users</h6>
                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">72,540</h2>
                    </div>
                    {/* End Col */}

                    <div className="col-6">
                      {/* Chart */}
                      <span className="d-inline-flex align-items-center float-right">
                        <svg
                          strokeWidth="1.5"
                          className="size-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
                          <path d="M12 3v3m0 12v3"></path>
                        </svg>
                      </span>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}

                  <span className="badge bg-soft-success text-success">
                    {/* Chart */}
                    <span className="lqd-change-indicator inline-flex items-center leading-none text-3xs px-1.5 py-0.5 leading-snug rounded-md text-green-600 bg-green-500/10">
                      <svg
                        className="size-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 15l6 -6l6 6"></path>
                      </svg>
                      0.6157354618016%
                    </span>
                    {/* End Chart */}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3 mt-3">
              <div className="card card-hover-shadow h-100">
                <div className="card-body">
                  <h6 className="card-subtitle">Online Users</h6>

                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">1</h2>
                    </div>
                    {/* End Col */}

                    <div className="col-6">
                      {/* Chart */}
                      <span className="d-inline-flex align-items-center float-right">
                        <svg
                          strokeWidth="1.5"
                          className="size-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                        </svg>
                      </span>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3 mt-3">
              <div className="card card-hover-shadow h-100">
                <div className="card-body">
                  <h6 className="card-subtitle">Visitors Today</h6>

                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">41</h2>
                    </div>
                    {/* End Col */}

                    <div className="col-6">
                      {/* Chart */}
                      <span className="d-inline-flex align-items-center float-right">
                        <svg
                          strokeWidth="1.5"
                          className="size-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                        </svg>
                      </span>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </div>
            </div>
          </div>
          {/* End Stats */}

        </div>
        {/* End Content */}

        {/* Footer */}
        <div className="footer">
          <div className="row justify-content-between align-items-center">
            <div className="col text-center">
              <p className="fs-6 mb-0">&copy; <span className="d-none d-sm-inline-block">2025 Skill Tricks.</span></p>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Footer */}
      </div>
    </main>
  );
};

export default UserDashboard;