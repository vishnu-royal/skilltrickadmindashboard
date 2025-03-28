import React, { useState } from "react";

const AuthSettings = () => {
  const [useCustomImage, setUseCustomImage] = useState(false);
  const [loginImage, setLoginImage] = useState(null);

  const handleCheckboxChange = () => {
    setUseCustomImage(!useCustomImage);
  };

  const handleFileChange = (e) => {
    setLoginImage(e.target.files[0]);
  };

  const handleSave = () => {
    console.log("Use custom image:", useCustomImage);
    console.log("Login image:", loginImage);
  };

  return (
    <main id="content" role="main" className="main">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="page-header-title">Auth Settings</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div id="accordion" className="mt-3 auth-setting">
              <div className="card menu-card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5
                    className="menu-title"
                    data-bs-toggle="collapse"
                    href="#collapseOne"
                  >
                    <i className="bi-chevron-down me-2"></i> Sign Pages
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                  <div className="card-body">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="homeOpenNewTab"
                        checked={useCustomImage}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="homeOpenNewTab">
                        Use custom image
                      </label>
                    </div>

                    {useCustomImage && (
                      <div className="mt-2 loginField">
                        <label className="form-label" htmlFor="login_image">Login Image</label>
                        <input
                          className="form-control"
                          id="login_image"
                          type="file"
                          name="login_image"
                          onChange={handleFileChange}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="btn-block mt-3">
                <button
                  className="btn btn-md btn-theme rounded-pill w-100"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="row justify-content-between align-items-center">
            <div className="col text-center">
              <p className="fs-6 mb-0">&copy; 2025 Skill Tricks.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthSettings;
