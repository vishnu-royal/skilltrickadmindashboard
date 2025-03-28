import React from 'react';

const Plans = () => {
  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="page-header-top">Dashboard</h6>
              <h1 className="page-header-title">Welcome, Admin.</h1>
            </div>
            {/* End Col */}

            {/* <div className="col-auto">
              <a className="btn btn-primary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#inviteUserModal">
                <i className="bi-person-plus-fill me-1"></i> Invite users
              </a>
            </div> */}
            {/* End Col */}
            <div className="col-lg-12">
              <ul className="mt-2 d-flex align-items-center tabs-link-btn">
                <li>
                  <a className="lqd-btn active" href="#all">
                    All
                  </a>
                </li>
                <li>
                  <a className="lqd-btn" href="#plan">
                    Your Plan
                  </a>
                </li>
                <li>
                  <a className="lqd-btn" href="#team">
                    Team Members
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Page Header */}

        {/* Stats */}
        <div className="row">
          <div className="col-sm-12 mb-3 mb-lg-5">
            {/*  */}
            <div className="card-body position-relative flex-grow-1 py-4 px-5 summary-section">
              <div className="mb-4 d-flex justify-content-between align-items-center gap-3">
                <h3 className="mb-0">Here is your plan summary:</h3>
                <div className="d-flex align-items-center gap-2">
                  <a className="btn btn-outline-primary d-flex align-items-center gap-1 text-xs" href="plans.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5l0 14"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                    Upgrade Your plan
                  </a>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="card text-secondary">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0">
                          <span className="fw-bold">Active Plan</span>
                          <span className="d-block">None</span>
                        </p>
                        <svg className="shrink-0" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.8346 9.99992L20.0013 19.1666L38.3346 0.833252M1.66797 9.99992L10.8346 19.1666M20.0013 9.99992L29.168 0.833252" stroke="url(#paint0_linear_210_8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <defs>
                            <linearGradient id="paint0_linear_210_8" x1="1.66797" y1="4.57325" x2="14.9702" y2="28.0385" gradientUnits="userSpaceOnUse">
                              <stop offset="0.139297" stopColor="#82E2F4"></stop>
                              <stop offset="0.620738" stopColor="#8A8AED"></stop>
                              <stop offset="1" stopColor="#6977DE"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="card text-secondary">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0">
                          <span className="fw-bold">Renewal Date</span>
                          <span className="d-block">None</span>
                        </p>
                        {/* SVG omitted for brevity */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="card text-secondary">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0">
                          <span className="fw-bold">Team Plan</span>
                          <span className="d-block">Not Active</span>
                        </p>
                        {/* SVG omitted for brevity */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="card text-secondary">
                    <div className="card-body py-1">
                      <div className="d-flex flex-column align-items-start">
                        <div className="d-flex flex-column align-items-start mt-2 w-100">
                          <div className="d-flex justify-content-between align-items-center w-100">
                            <div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="d-flex align-items-center gap-2">
                                  <span className="badge rounded-pill bg-primary">Words</span>
                                  <span className="ms-auto fw-medium">Unlimited</span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="d-flex align-items-center gap-2">
                                  <span className="badge rounded-pill bg-secondary">Images</span>
                                  <span className="ms-auto fw-medium">Unlimited</span>
                                </div>
                              </div>
                            </div>

                            {/* SVG Icon */}
                            <svg width="24" height="24" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_6425_3048)">
                                {/* Eye Shape Paths */}
                              </g>
                              <defs>
                                {/* Linear Gradient Definitions */}
                              </defs>
                            </svg>
                          </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="my-2 w-100">
                          <div className="progress-container">
                            <div className="progress-bar" id="progress-bar">70%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal */}
              <div className="modal fade" id="creditModal" tabIndex="-1" aria-labelledby="creditModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="creditModalLabel">Your Credit List</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p className="mb-4">Each credit unlocks powerful AI tools and features designed to enhance your content creation.</p>
                      <div className="d-flex justify-content-center" id="credit-list-partial-764986">
                        <svg className="animate-spin text-gray-300" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                          {/* Spinner Paths */}
                        </svg>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <a className="btn btn-primary" href="https://demo.magicproject.ai/dashboard/user/payment">Upgrade Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ./ */}

            {/* Card */}
            <div className="head mb-5">
              <h2 className="card-title">Select a Plan:</h2>
              <h6 className="card-subtitle">Please select a subscription plan or a token pack to upgrade your current plan.</h6>
            </div>

            <div className="body price-nav-tabs">
              <ul className="nav nav-pills mb-5 justify-content-center" id="pricingTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="monthly-tab" data-bs-toggle="pill" data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="true">Monthly</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="yearly-tab" data-bs-toggle="pill" data-bs-target="#yearly" type="button" role="tab" aria-controls="yearly" aria-selected="false">Yearly</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="prepaid-tab" data-bs-toggle="pill" data-bs-target="#prepaid" type="button" role="tab" aria-controls="prepaid" aria-selected="false">Pre-Paid</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="lifetime-tab" data-bs-toggle="pill" data-bs-target="#lifetime" type="button" role="tab" aria-controls="lifetime" aria-selected="false">Lifetime</button>
                </li>
              </ul>

              <div className="tab-content" id="pricingTabsContent">
                <div className="tab-pane fade show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                  <div className="row">
                    {/* Free Plan */}
                    <div className="col-md-4">
                      <div className="pricing-card">
                        <span className="currency">$</span>
                        <span className="price">0</span>
                        <span className="period">/ Monthly</span>
                        <div className="plan-name">Free Plan</div>

                        <div className="features">
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Access <strong>163</strong> Features </span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Plan Credits </span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span><strong>0</strong> Team allow seats</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>GPT-3.5</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Access to Free Templates</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Access to Free AI Tools</span>
                          </div>
                        </div>

                        <button className="btn btn-outline-primary w-100 mt-4">Choose plan</button>
                      </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="col-md-4">
                      <div className="pricing-card">
                        <div className="popular-tag">Popular plan</div>
                        <span className="currency">$</span>
                        <span className="price">39.9</span>
                        <span className="period">/ Monthly</span>
                        <div className="plan-name">Premium Plan</div>

                        <div className="features">
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Access <strong>163</strong> Features </span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Plan Credits </span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span><strong>2</strong> Team allow seats</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>7 Days of free trial.</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>GPT-4o</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Access to All Templates</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Access to All AI Tools</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>WordPress Integration</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Chatbot Training</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Premium Support</span>
                          </div>
                        </div>

                        <button className="btn btn-outline-primary w-100 mt-4">Choose plan</button>
                      </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="col-md-4">
                      <div className="pricing-card">
                        <span className="currency">$</span>
                        <span className="price">49.9</span>
                        <span className="period">/ Monthly</span>
                        <div className="plan-name">Enterprise</div>

                        <div className="features">
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Access <strong>163</strong> Features </span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Plan Credits </span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span><strong>234</strong> Team allow seats</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>GPT-4o</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Access to All Templates</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Access to All AI Tools</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>WordPress Integration</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Chatbot Training</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Premium Support</span>
                          </div>
                          <div className="feature">
                            <div className="feature-icon">✓</div>
                            <span>Team Members</span>
                          </div>
                        </div>

                        <button className="btn btn-outline-primary w-100 mt-4">Choose plan</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                  {/* Add yearly pricing content here */}
                  <p className="text-center">Yearly pricing plans will be displayed here.</p>
                </div>

                <div className="tab-pane fade" id="prepaid" role="tabpanel" aria-labelledby="prepaid-tab">
                  {/* Add pre-paid pricing content here */}
                  <p className="text-center">Pre-paid pricing plans will be displayed here.</p>
                </div>

                <div className="tab-pane fade" id="lifetime" role="tabpanel" aria-labelledby="lifetime-tab">
                  {/* Add lifetime pricing content here */}
                  <p className="text-center">Lifetime pricing plans will be displayed here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Stats */}

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
      {/* End Content */}
    </main>
  );
};

export default Plans;