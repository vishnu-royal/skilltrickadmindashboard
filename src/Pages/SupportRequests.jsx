import React from 'react';
import { Link } from 'react-router-dom';

const SupportRequests = () => {
    return (
        <main id="content" role="main" className="main">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h1 className="page-header-title">Support Requests</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 mb-3 mb-lg-5 mt-3">
                        <div className="card position-relative flex-grow-1 py-4 px-5">
                            <div className="table-responsive">
                                <table id="userTable" className="table">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Ticket ID</th>
                                            <th>Status</th>
                                            <th>Category</th>
                                            <th>Subject</th>
                                            <th>Priority</th>
                                            <th>Created At</th>
                                            <th>Last Updated</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>YCD4XXNMT9</td>
                                            <td><span className="badge bg-warning text-dark">Waiting for answer</span></td>
                                            <td>General Inquiry</td>
                                            <td>Help Me</td>
                                            <td>Low</td>
                                            <td>2025-03-01 11:10:14</td>
                                            <td>2025-03-02 08:42:28</td>
                                            <td>
                                                <div className="table-button text-center">
                                                    <Link to="/support-requests-view" className="lqd-btn group inline-flex items-center justify-center theme">
                                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>YCD4XXNMT10</td>
                                            <td><span className="badge bg-success">Answered</span></td>
                                            <td>General Inquiry</td>
                                            <td>Error</td>
                                            <td>High</td>
                                            <td>2025-03-09 11:10:14</td>
                                            <td>2025-03-10 08:42:28</td>
                                            <td>
                                                <div className="table-button text-center">
                                                    <Link to="/support-requests-view" className="lqd-btn group inline-flex items-center justify-center theme">
                                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M1 12s4-7 11-7 11 7-11 7-11-7-11-7z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
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

export default SupportRequests;
