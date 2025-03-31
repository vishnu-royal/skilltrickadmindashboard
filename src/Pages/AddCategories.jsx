import React, { useState } from 'react';

const AddCategories = () => {
  // Initial state
  const [formData, setFormData] = useState({
    categoryId: '123',
    categoryName: 'Default Category Name',
    userType: 'System',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Category Updated Successfully!');
    // You can add API integration logic here
  };

  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="page-header-title">Add Categories</h1>
            </div>
          </div>
        </div>
        {/* End Page Header */}

        {/* Stats */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Hidden field for Category ID */}
                  <input
                    type="hidden"
                    id="categoryId"
                    name="categoryId"
                    value={formData.categoryId}
                  />

                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Category Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      name="categoryName"
                      value={formData.categoryName}
                      onChange={handleChange}
                      placeholder="Enter category name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="userType" className="form-label">
                      User Type
                    </label>
                    <select
                      className="form-select"
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      required
                    >
                      <option value="System">System</option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  </div>

                  <div className="text-end">
                    <button type="submit" className="btn btn-md btn-theme">
                      Update Category
                    </button>
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

export default AddCategories;
