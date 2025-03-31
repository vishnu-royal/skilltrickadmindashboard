import $ from 'jquery';
import 'datatables.net';
// import 'datatables.net-dt/css/jquery.dataTables.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';


const AiWriterCategories = () => {
    const categories = [
        { name: 'academic', user: 'System' },
        { name: 'advertisement', user: 'System' },
        { name: 'Blog', user: 'System' },
        { name: 'Blog A', user: 'System' },
      ];
    
     
useEffect(() => {
// Initialize DataTable when component mounts
const table = $('#userTable').DataTable({
    paging: true,
    searching: true,
    lengthChange: true,
    info: true,
});

// Optional: Search functionality using input field
$('#tableSearch').on('keyup', function () {
    table.search(this.value).draw();
});

// Cleanup DataTable instance when component unmounts
return () => {
    table.destroy();
};
}, []);
      
  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="page-header-title">
                AI Writer Categories
                <span className="add-btn float-right">
                  <a
                    href="/add-categories"
                    className="btn btn-sm btn-theme right-btn"
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
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M16 19h6" />
                      <path d="M19 16v6" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                    </svg>
                    Add Categories
                  </a>
                </span>
              </h1>
              <h6 className="text-muted">Manage AI Writer Categories</h6>
            </div>
          </div>
          {/* End Row */}
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
                    {categories.map((category, index) => (
                      <tr key={index}>
                        <td>{category.name}</td>
                        <td>{category.user}</td>
                        <td>
                          <div className="d-flex align-items-center table-button text-left">
                            <a
                              className="lqd-btn group inline-flex items-center justify-center theme"
                              title="Edit"
                              href="/edit-categories"
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
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                                <path d="M16 19h6" />
                              </svg>
                            </a>
                            <a
                              className="lqd-btn group inline-flex items-center justify-center red"
                              title="Delete"
                              href="/#"
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
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            <p className="fs-6 mb-0">
              &copy; <span className="d-none d-sm-inline-block">2025 Skill Tricks.</span>
            </p>
          </div>
        </div>
      </div>
      {/* End Footer */}
    </main>
  );
};

export default AiWriterCategories;
