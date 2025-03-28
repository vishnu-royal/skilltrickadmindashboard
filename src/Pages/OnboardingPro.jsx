import React from 'react';
const OnboardingPro = () => {
    return (
      <main id="content" role="main" className="main">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h1 className="page-header-title">Onboarding Pro</h1>
              </div>
            </div>
          </div>
  
          <div className="row">
            {[
              { title: "Banners", iconPath: "M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5 M7 13h3" },
              { title: "Surveys", iconPath: "M13 5h8 M13 9h5 M13 15h8 M13 19h5 M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" },
              { title: "Onboarding", iconPath: "M3 4l18 0 M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10 M12 16l0 4 M9 20l6 0 M8 12l3 -3l2 2l3 -3" },
            ].map((item, index) => (
              <div key={index} className="col-md-4 mb-3 mb-lg-5 mt-3 d-flex">
                <div className="card mt-2 text-center w-100">
                  <div className="card-body">
                    <svg
                      strokeWidth="1.5"
                      className="size-28 mx-auto mb-1 onboarding-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={item.iconPath}></path>
                    </svg>
                    <h2 className="ttl">{item.title}</h2>
                    <div className="btn-block mt-3">
                      <a href="#/" className="btn btn-sm btn-theme btn-radius">View</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="footer">
            <div className="row justify-content-between align-items-center">
              <div className="col text-center">
                <p className="fs-6 mb-0">&copy; <span className="d-none d-sm-inline-block">2025 Skill Tricks.</span></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default OnboardingPro;
  