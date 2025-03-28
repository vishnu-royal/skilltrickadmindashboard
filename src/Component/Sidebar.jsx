import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white">
            <div className="navbar-vertical-container">
                <div className="navbar-vertical-footer-offset">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/" aria-label="Front">
                        <img className="navbar-brand-logo" src="assets/img/logo.png" alt="Logo" />
                        <img className="navbar-brand-logo-mini" src="assets/img/logo.png" alt="Logo" />
                    </Link>
                    {/* End Logo */}

                    {/* Navbar Vertical Toggle */}
                    <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                        <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
                        <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
                    </button>
                    {/* End Navbar Vertical Toggle */}

                    {/* Content */}
                    <div className="navbar-vertical-content">
                        <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
                            {/* Collapse */}
                            <div className="nav-item">
                                <Link className="nav-link active" to="/index" role="button">
                                    <i className="bi-house-door nav-icon"></i>
                                    <span className="nav-link-title">Dashboards</span>
                                </Link>
                            </div>
                            {/* End Collapse */}

                            <span className="dropdown-header mt-4">Admin</span>
                            <small className="bi-three-dots nav-subtitle-replacer"></small>

                            {/* Collapse */}
                            <div className="nav-item">
                                <Link className="nav-link dropdown-toggle collapsed active" to="/#/" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthentication" aria-expanded="true" aria-controls="navbarVerticalMenuAuthentication">
                                    <i className="bi-shield-lock nav-icon"></i>
                                    <span className="nav-link-title">Admin</span>
                                </Link>

                                <div id="navbarVerticalMenuAuthentication" className="nav-collapse collapse show" data-bs-parent="#navbarVerticalMenu">
                                    <div id="navbarVerticalMenuAuthenticationMenu">
                                        {/* Collapse */}
                                        <div className="nav-item">
                                            <Link className="nav-link active" to="/index">
                                                Dashboard
                                            </Link>
                                            <Link className="nav-link" to="/plans">
                                                Plan
                                            </Link>
                                        </div>
                                        {/* End Collapse */}
                                    </div>
                                </div>
                            </div>
                            {/* End Collapse */}

                            {/* Collapse for User Management */}
                            <div className="nav-item">
                                <Link className="nav-link dropdown-toggle" to="/#navbarVerticalMenuPagesUserProfileMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUserProfileMenu" aria-expanded="true" aria-controls="navbarVerticalMenuPagesUserProfileMenu">
                                    <i className="bi-person nav-icon"></i>
                                    <span className="nav-link-title">User Management</span>
                                </Link>

                                <div id="navbarVerticalMenuPagesUserProfileMenu" className="nav-collapse collapse" data-bs-parent="#navbarVerticalMenuPagesMenu">
                                    <Link className="nav-link" to="/users"> Users List</Link>
                                    <Link className="nav-link" to="/add-new-user">Add New User</Link>
                                    <Link className="nav-link" to="/user-dashboard">Users Dashboard</Link>
                                </div>
                            </div>
                            {/* End Collapse */}

                            {/* Support Requests */}
                            <div className="nav-item">
                                <Link className="nav-link" to="/support-requests" data-placement="left">
                                    <i className="nav-icon">
                                        {/* SVG icon */}
                                    </i>
                                    <span className="nav-link-title">Support Requests</span>
                                </Link>
                            </div>

                            {/* Onboarding Pro */}
                            <div className="nav-item">
                                <Link className="nav-link" to="/onboarding-pro" data-placement="left">
                                    <i className="nav-icon">
                                        {/* SVG icon */}
                                    </i>
                                    <span className="nav-link-title">Onboarding Pro</span>
                                </Link>
                            </div>

                            {/* Collapse for Templates */}
                            <div className="nav-item">
                                <Link className="nav-link dropdown-toggle" to="/#navbarVerticalTemplates" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalTemplates" aria-expanded="false" aria-controls="navbarVerticalTemplates">
                                    <i className="nav-icon">
                                        {/* SVG icon */}
                                    </i>
                                    <span className="nav-link-title">Templates</span>
                                </Link>

                                <div id="navbarVerticalTemplates" className="nav-collapse collapse" data-bs-parent="#navbarVerticalTemplates">
                                    <Link className="nav-link" to="/built-in-templates"> Built-in Templates</Link>
                                    <Link className="nav-link" to="/custom-template">Custom Templates</Link>
                                    <Link className="nav-link" to="/ai-writer-categories">AI Writer Categories</Link>
                                </div>
                            </div>
                            {/* End Collapse */}

                            {/* Collapse for Chat Settings */}
                            <div className="nav-item">
                                <Link className="nav-link dropdown-toggle" to="/#navbarVerticalChat" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalChat" aria-expanded="false" aria-controls="navbarVerticalChat">
                                    <i className="nav-icon">
                                        {/* SVG icon */}
                                    </i>
                                    <span className="nav-link-title">Chat Settings</span>
                                </Link>

                                <div id="navbarVerticalChat" className="nav-collapse collapse" data-bs-parent="#navbarVerticalChat">
                                    <Link className="nav-link" to="/chat-categories"> Chat Categories</Link>
                                    <Link className="nav-link" to="/chat-templates">Chat Templates</Link>
                                    <Link className="nav-link" to="/chatbot-training">Chatbot Training</Link>
                                    <Link className="nav-link" to="/floating-chat-settings">Floating Chat Settings</Link>
                                    <Link className="nav-link" to="/assistant-training">Assistant Training</Link>
                                </div>
                            </div>
                            {/* End Collapse */}

                            {/* Collapse for Frontend */}
                            <div className="nav-item">
                                <Link className="nav-link dropdown-toggle" to="/#navbarVerticalFrontend" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalFrontend" aria-expanded="false" aria-controls="navbarVerticalFrontend">
                                    <i className="nav-icon">
                                        {/* SVG icon */}
                                    </i>
                                    <span className="nav-link-title">Frontend</span>
                                </Link>

                                <div id="navbarVerticalFrontend" className="nav-collapse collapse" data-bs-parent="#navbarVerticalFrontend">
                                    <Link className="nav-link" to="/frontend-settings"> Frontend Settings</Link>
                                    <Link className="nav-link" to="/frontend-section-settings">Frontend Section Settings</Link>
                                    <Link className="nav-link" to="/auth-settings">Auth Settings</Link>
                                    <Link className="nav-link" to="/faq">F.A.Q.</Link>
                                    <Link className="nav-link" to="/tools-section">Tools Section</Link>
                                </div>
                            </div>
                            {/* End Collapse */}

                            {/* Collapse for Finance */}
                            <div className="nav-item">
                                <Link className="nav-link dropdown-toggle" to="/#navbarVerticalFinance" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalFinance" aria-expanded="false" aria-controls="navbarVerticalFinance">
                                    <i className="nav-icon">
                                        {/* SVG icon */}
                                    </i>
                                    <span className="nav-link-title">Finance</span>
                                </Link>

                                <div id="navbarVerticalFinance" className="nav-collapse collapse" data-bs-parent="#navbarVerticalFinance">
                                    <Link className="nav-link active" to="/payment-gateways"> Payment Gateways</Link>
                                    <Link className="nav-link" to="/api-cost-management">API Cost Management</Link>
                                    <Link className="nav-link" to="/mobile-payment">Mobile Payment</Link>
                                    <Link className="nav-link" to="/pricing-plans">Pricing plans</Link>
                                </div>
                            </div>
                            {/* End Collapse */}

                            {/* Pages */}
                            <div className="nav-item">
                                <Link className="nav-link" to="/pages" data-placement="left">
                                    <i className="bi-key nav-icon"></i>
                                    <span className="nav-link-title">Pages</span>
                                </Link>
                            </div>

                            {/* Blogs */}
                            <div className="nav-item">
                                <Link className="nav-link" to="/blogs" data-placement="left">
                                    <i className="nav-icon">
                                        {/* SVG icon */}
                                    </i>
                                    <span className="nav-link-title">Blogs</span>
                                </Link>
                            </div>

                            {/* Collapse for Settings */}
                            <div className="nav-item">
                                <Link className="nav-link dropdown-toggle" to="/#navbarVerticalSettings" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalSettings" aria-expanded="false" aria-controls="navbarVerticalSettings">
                                    <i className="nav-icon">
                                        {/* SVG icon */}
                                    </i>
                                    <span className="nav-link-title">Settings</span>
                                </Link>
                                <div id="navbarVerticalSettings" className="nav-collapse collapse" data-bs-parent="#navbarVerticalFinance">
                                    <Link className="nav-link" to="/general-settings"> General Settings</Link>
                                    <Link className="nav-link active" to="/menu-management"> Menu Management</Link>
                                    <Link className="nav-link" to="/google-adsense">Google adsense</Link>
                                </div>
                            </div>
                        </div>
                        {/* End Collapse */}
                    </div>
                    {/* End Content */}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;