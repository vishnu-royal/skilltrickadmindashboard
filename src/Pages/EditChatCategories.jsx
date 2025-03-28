const EditChatCategories = () => {
  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="page-header-title">Edit Chat Categories</h1>
            </div>
          </div>
        </div>
        {/* End Page Header */}

        {/* Stats */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="role" className="form-label">
                        User
                      </label>
                      <select className="form-select" id="role">
                        <option value="Employee">Admin</option>
                        <option value="User">System</option>
                      </select>
                    </div>

                    <div className="col-md-12">
                      <div className="btn-block float-right">
                        <button type="submit" className="btn btn-sm btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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

export default EditChatCategories;
