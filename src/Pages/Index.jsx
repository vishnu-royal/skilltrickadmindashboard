import React from 'react';


const Index = () => {
    return (
        <>
            
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
                        <div className="col-sm-6 col-lg-6 mb-3 mb-lg-5" id="all">
                            {/* Card */}
                            <a className="card card-hover-shadow h-100" href="#/">
                                <div className="card-body">
                                    <h6 className="card-subtitle">Total Users</h6>
                                    <div className="row align-items-center gx-2 mb-1">
                                        <div className="col-6">
                                            <h2 className="card-title text-inherit">72,540</h2>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-6">
                                            {/* Chart */}
                                            <div className="chartjs-custom" style={{ height: '3rem' }}>
                                                <canvas className="js-chart" data-hs-chartjs-options='{
                                                    "type": "line",
                                                    "data": {
                                                    "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                                    "datasets": [{
                                                        "data": [21,20,24,20,18,17,15,17,18,30,31,30,30,35,25,35,35,40,60,90,90,90,85,70,75,70,30,30,30,50,72],
                                                        "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                                        "borderColor": "#377dff",
                                                        "borderWidth": 2,
                                                        "pointRadius": 0,
                                                        "pointHoverRadius": 0
                                                    }]
                                                    },
                                                    "options": {
                                                    "scales": {
                                                        "y": {
                                                        "display": false
                                                        },
                                                        "x": {
                                                        "display": false
                                                        }
                                                    },
                                                    "hover": {
                                                        "mode": "nearest",
                                                        "intersect": false
                                                    },
                                                    "plugins": {
                                                        "tooltip": {
                                                        "postfix": "k",
                                                        "hasIndicator": true,
                                                        "intersect": false
                                                        }
                                                    }
                                                    }
                                                }'>
                                                </canvas>
                                            </div>
                                            {/* End Chart */}
                                        </div>
                                        {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <span className="badge bg-soft-success text-success">
                                        <i className="bi-graph-up"></i> 12.5%
                                    </span>
                                    <span className="text-body fs-6 ms-1">from 70,104</span>
                                </div>
                            </a>
                            {/* End Card */}
                        </div>

                        <div className="col-sm-6 col-lg-6 mb-3 mb-lg-5">
                            {/* Card */}
                            <a className="card card-hover-shadow h-100" href="#/">
                                <div className="card-body">
                                    <h6 className="card-subtitle">Pageviews</h6>
                                    <div className="row align-items-center gx-2 mb-1">
                                        <div className="col-6">
                                            <h2 className="card-title text-inherit">92,913</h2>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-6">
                                            {/* Chart */}
                                            <div className="chartjs-custom" style={{ height: '3rem' }}>
                                                <canvas className="js-chart" data-hs-chartjs-options='{
                                                    "type": "line",
                                                    "data": {
                                                    "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                                    "datasets": [{
                                                        "data": [21,20,24,15,17,30,30,35,35,35,40,60,12,90,90,85,70,75,43,75,90,22,120,120,90,85,100,92,92,92,92],
                                                        "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                                        "borderColor": "#377dff",
                                                        "borderWidth": 2,
                                                        "pointRadius": 0,
                                                        "pointHoverRadius": 0
                                                    }]
                                                    },
                                                    "options": {
                                                    "scales": {
                                                        "y": {
                                                        "display": false
                                                        },
                                                        "x": {
                                                        "display": false
                                                        }
                                                    },
                                                    "hover": {
                                                        "mode": "nearest",
                                                        "intersect": false
                                                    },
                                                    "plugins": {
                                                        "tooltip": {
                                                        "postfix": "k",
                                                        "hasIndicator": true,
                                                        "intersect": false
                                                        }
                                                    }
                                                    }
                                                }'>
                                                </canvas>
                                            </div>
                                            {/* End Chart */}
                                        </div>
                                        {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <span className="badge bg-soft-secondary text-body">0.0%</span>
                                    <span className="text-body fs-6 ms-1">from 2,913</span>
                                </div>
                            </a>
                            {/* End Card */}
                        </div>
                    </div>
                    {/* End Stats */}

                    {/* Card */}
                    <div className="card p-4 shadow-lg border-0" id="plan">
                        <h3 className="mb-3 d-flex align-items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.7588 7.85618L17.1437 8.18336V8.18568C16.3659 8.34353 15.6517 8.72701 15.0905 9.28825C14.5292 9.8495 14.1458 10.5636 13.9879 11.3415L13.6607 12.9565C13.6262 13.1155 13.5383 13.2578 13.4117 13.3599C13.285 13.462 13.1273 13.5177 12.9646 13.5177C12.8019 13.5177 12.6442 13.462 12.5175 13.3599C12.3909 13.2578 12.303 13.1155 12.2685 12.9565L11.9413 11.3415C11.7837 10.5635 11.4003 9.84922 10.839 9.28793C10.2777 8.72663 9.56345 8.34324 8.78546 8.18568L7.17042 7.8585C7.00937 7.82552 6.86464 7.73795 6.76071 7.61058C6.65678 7.48321 6.60001 7.32386 6.60001 7.15946C6.60001 6.99507 6.65678 6.83572 6.76071 6.70835C6.86464 6.58098 7.00937 6.4934 7.17042 6.46043L8.78546 6.13324C9.56339 5.97554 10.2776 5.5921 10.8389 5.03084C11.4001 4.46957 11.7836 3.75536 11.9413 2.97743L12.2685 1.36239C12.303 1.20344 12.3909 1.06109 12.5175 0.959015C12.6442 0.856935 12.8019 0.80127 12.9646 0.80127C13.1273 0.80127 13.285 0.856935 13.4117 0.959015C13.5383 1.06109 13.6262 1.20344 13.6607 1.36239L13.9879 2.97743C14.1458 3.75529 14.5292 4.46943 15.0905 5.03067C15.6517 5.59192 16.3659 5.9754 17.1437 6.13324L18.7588 6.45811C18.9198 6.49108 19.0645 6.57866 19.1685 6.70603C19.2724 6.8334 19.3292 6.99275 19.3292 7.15714C19.3292 7.32154 19.2724 7.48089 19.1685 7.60826C19.0645 7.73563 18.9198 7.8232 18.7588 7.85618ZM6.94895 16.0393L6.51038 16.1286C5.96946 16.2383 5.47282 16.5037 5.08244 16.8939C4.69206 17.2841 4.42523 17.7806 4.31524 18.3214L4.2259 18.76C4.202 18.8835 4.13584 18.9949 4.03877 19.075C3.9417 19.1551 3.81978 19.1989 3.69394 19.1989C3.56809 19.1989 3.44617 19.1551 3.3491 19.075C3.25204 18.9949 3.18587 18.8835 3.16197 18.76L3.07263 18.3214C2.96278 17.7805 2.69599 17.2839 2.30559 16.8937C1.91518 16.5035 1.41847 16.237 0.877485 16.1274L0.43892 16.0381C0.315366 16.0142 0.203985 15.948 0.123895 15.851C0.0438042 15.7539 0 15.632 0 15.5061C0 15.3803 0.0438042 15.2584 0.123895 15.1613C0.203985 15.0642 0.315366 14.9981 0.43892 14.9742L0.877485 14.8848C1.41862 14.7752 1.91545 14.5085 2.30587 14.1181C2.69629 13.7276 2.96299 13.2308 3.07263 12.6897L3.16197 12.2511C3.18587 12.1276 3.25204 12.0162 3.3491 11.9361C3.44617 11.856 3.56809 11.8122 3.69394 11.8122C3.81978 11.8122 3.9417 11.856 4.03877 11.9361C4.13584 12.0162 4.202 12.1276 4.2259 12.2511L4.31524 12.6897C4.42482 13.231 4.69148 13.728 5.08189 14.1186C5.4723 14.5092 5.96915 14.7761 6.51038 14.886L6.94895 14.9753C7.0725 14.9992 7.18388 15.0654 7.26397 15.1625C7.34407 15.2595 7.38787 15.3814 7.38787 15.5073C7.38787 15.6331 7.34407 15.7551 7.26397 15.8521C7.18388 15.9492 7.0725 16.0154 6.94895 16.0393Z" fill="url(#paint0_linear_213_525)"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_213_525" x1="1.1976e-07" y1="4.55439" x2="15.5124" y2="18.9291" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#82E2F4"></stop>
                                        <stop offset="0.502" stopColor="#8A8AED"></stop>
                                        <stop offset="1" stopColor="#6977DE"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            Hey, How can I help you?
                        </h3>

                        <form className="position-relative mb-3">
                            <div className="input-group">
                                <input type="search" className="form-control rounded-pill px-4 py-2 shadow-sm" placeholder="Search for templates and documents..." onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); } }} />
                            </div>
                        </form>

                        <div className="search-results position-absolute w-100 bg-white shadow-lg rounded d-none p-3">
                            <h3 className="border-bottom pb-2 mb-2">Search results</h3>
                            <div className="search-results-container"></div>
                        </div>
                    </div>
                    {/* ./Card */}

                    <div className="row mt-5">
                        <div className="col-lg-6 d-flex mb-3">
                            <div className="card w-100">
                                <div className="card-body position-relative py-4 px-5">
                                    <div className="mb-4 text-center">
                                        <h5 className="text-center">Your Plan</h5>
                                        <p className="mb-4 text-center fs-5 fw-semibold">
                                            You have no subscription at the moment. Please select a subscription plan or a token pack. Total <strong>Unlimited</strong> word and <strong>Unlimited</strong> image tokens left.
                                        </p>
                                        <div id="chart-credit"></div>
                                        <div className="mt-3">
                                            <a className="btn btn-sm btn-light fw-medium rounded-pill py-2 px-3 shadow-sm d-inline-flex align-items-center" href="plans.html">
                                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 5l0 14"></path>
                                                    <path d="M5 12l14 0"></path>
                                                </svg>Select a Plan
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="card w-100 mb-3">
                                <div className="card-body position-relative py-4 px-5">
                                    <figure className="mb-4 text-center">
                                        <img className="mx-auto img-fluid w-50" src="assets/img/team.png" alt="Team" />
                                    </figure>
                                    <p className="mb-4 text-center fs-5 fw-semibold">
                                        Add your team members’ email address <br /> to start collaborating. 📧
                                    </p>
                                    <form className="d-flex flex-column gap-2" action="" method="post">
                                        <input type="hidden" name="team_id" value="35" />
                                        <div className="position-relative">
                                            <input id="email" required className="form-control py-3 px-3 rounded" name="email" type="email" placeholder="Email address" />
                                            <svg className="position-absolute top-50 end-0 translate-middle-y me-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                                <path d="M3 7l9 6l9 -6"></path>
                                            </svg>
                                        </div>
                                        <button type="submit" className="btn btn-primary text-white fw-medium rounded-pill py-2 px-3 shadow-sm">
                                            Invite Friends
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
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
            </main>
        </>
    );
};

export default Index;