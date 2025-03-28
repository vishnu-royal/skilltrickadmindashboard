const ChatCategories = () => {
  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="page-header-title">
                Chat Categories
                <span className="add-btn">
                  <a
                    href="/add-chat-categories"
                    className="float-right btn btn-sm btn-theme right-btn"
                  >
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                      <path d="M16 19h6"></path>
                      <path d="M19 16v6"></path>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                    </svg>
                    Add Chat Categories
                  </a>
                </span>
              </h1>
              <h6 className="text-muted">Manage Chat Categories</h6>
            </div>
          </div>
        </div>
        {/* End Page Header */}

        {/* Stats */}
        <div className="row">
          <div className="col-sm-12 mb-3 mb-lg-5 mt-3">
            <div className="card position-relative flex-grow-1 py-4 px-5">
              <div className="table-responsive">
                <table id="userTable" className="table">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>User</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Customer Support</td>
                      <td>Admin</td>
                      <td>
                        <div className="table-button text-left">
                          <a
                            className="lqd-btn group inline-flex items-center justify-center"
                            title="Edit"
                            href="/edit-chat-categories"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                              <path d="M13.5 6.5l4 4"></path>
                              <path d="M16 19h6"></path>
                            </svg>
                          </a>
                          <a
                            className="lqd-btn group inline-flex items-center justify-center"
                            title="Delete"
                            href="#/"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6l-12 12"></path>
                              <path d="M6 6l12 12"></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Entertainment</td>
                      <td>System</td>
                      <td>
                        <div className="table-button text-left">
                          <a
                            className="lqd-btn group inline-flex items-center justify-center theme"
                            title="Edit"
                            href="edit-chat-categories"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                              <path d="M13.5 6.5l4 4"></path>
                              <path d="M16 19h6"></path>
                            </svg>
                          </a>
                          <a
                            className="lqd-btn group inline-flex items-center justify-center red"
                            title="Delete"
                            href="#/"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6l-12 12"></path>
                              <path d="M6 6l12 12"></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* End Stats */}
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="row justify-content-between align-items-center">
          <div className="col text-center">
            <p className="fs-6 mb-0">
              &copy; <span className="d-none d-sm-inline-block">2025 Skill Tricks.</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatCategories;
