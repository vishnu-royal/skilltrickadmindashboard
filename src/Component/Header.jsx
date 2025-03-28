import React from 'react';

const Header = () => {
    return (
        <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
            <div className="navbar-nav-wrap">
                {/* Logo */}
                <a className="navbar-brand" href="index.html" aria-label="Front">
                    <img className="navbar-brand-logo" src="assets/img/logo.png" alt="Logo" />
                    <img className="navbar-brand-logo-mini" src="assets/img/logo.png" alt="Logo" />
                </a>
                {/* End Logo */}

                <div className="navbar-nav-wrap-content-start">
                    {/* Navbar Vertical Toggle */}
                    <button type="button" className="navbar-aside-toggler">
                        <i className="bi-arrow-bar-left navbar-toggler-short-align" title="Collapse"></i>
                        <i className="bi-arrow-bar-right navbar-toggler-full-align" title="Expand"></i>
                    </button>
                    {/* End Navbar Vertical Toggle */}

                    {/* Search Form */}
                    <div className="dropdown ms-2">
                        {/* Input Group */}
                        <div className="d-none d-lg-block">
                            <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                                <div className="input-group-prepend input-group-text">
                                    <i className="bi-search"></i>
                                </div>
                                <input type="search" className="js-form-search form-control" placeholder="Search in front" aria-label="Search in front" data-hs-form-search-options='{
                                    "clearIcon": "#clearSearchResultsIcon",
                                    "dropMenuElement": "#searchDropdownMenu",
                                    "dropMenuOffset": 20,
                                    "toggleIconOnFocus": true,
                                    "activeClass": "focus"
                                  }' />
                                <a className="input-group-append input-group-text" href="javascript:void(0);">
                                    <i id="clearSearchResultsIcon" className="bi-x-lg" style={{ display: 'none' }}></i>
                                </a>
                            </div>
                        </div>

                        <button className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none" type="button" data-hs-form-search-options='{
                                "clearIcon": "#clearSearchResultsIcon",
                                "dropMenuElement": "#searchDropdownMenu",
                                "dropMenuOffset": 20,
                                "toggleIconOnFocus": true,
                                "activeClass": "focus"
                              }'>
                            <i className="bi-search"></i>
                        </button>
                        {/* End Input Group */}
                    </div>
                    {/* End Search Form */}
                </div>

                <div className="navbar-nav-wrap-content-end">
                    {/* Navbar */}
                    <ul className="navbar-nav">
                        <li className="nav-item d-none d-sm-inline-block">
                            {/* Notification */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="navbarNotificationsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                    <i className="bi-bell"></i>
                                    <span className="btn-status btn-sm-status btn-status-danger"></span>
                                </button>

                                <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdown" style={{ width: '25rem' }}>
                                    <div className="card">
                                        {/* Header */}
                                        <div className="card-header card-header-content-between">
                                            <h4 className="card-title mb-0">Notifications</h4>
                                            {/* Unfold */}
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" id="navbarNotificationsDropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi-three-dots-vertical"></i>
                                                </button>

                                                <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdownSettings">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#/">
                                                        <i className="bi-archive dropdown-item-icon"></i> Archive all
                                                    </a>
                                                    <a className="dropdown-item" href="#/">
                                                        <i className="bi-check2-all dropdown-item-icon"></i> Mark all as read
                                                    </a>
                                                    <a className="dropdown-item" href="#/">
                                                        <i className="bi-toggle-off dropdown-item-icon"></i> Disable notifications
                                                    </a>
                                                    <a className="dropdown-item" href="#/">
                                                        <i className="bi-gift dropdown-item-icon"></i> What's new?
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <span className="dropdown-header">Feedback</span>
                                                    <a className="dropdown-item" href="#/">
                                                        <i className="bi-chat-left-dots dropdown-item-icon"></i> Report
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                        {/* End Header */}

                                        {/* Nav */}
                                        <ul className="nav nav-tabs nav-justified" id="notificationTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#notificationNavOne" id="notificationNavOne-tab" data-bs-toggle="tab" data-bs-target="#notificationNavOne" role="tab" aria-controls="notificationNavOne" aria-selected="true">
                                                    Messages (3)
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#notificationNavTwo" id="notificationNavTwo-tab" data-bs-toggle="tab" data-bs-target="#notificationNavTwo" role="tab" aria-controls="notificationNavTwo" aria-selected="false">
                                                    Archived
                                                </a>
                                            </li>
                                        </ul>
                                        {/* End Nav */}

                                        {/* Body */}
                                        <div className="card-body-height">
                                            {/* Tab Content */}
                                            <div className="tab-content" id="notificationTabContent">
                                                <div className="tab-pane fade show active" id="notificationNavOne" role="tabpanel" aria-labelledby="notificationNavOne-tab">
                                                    {/* List Group */}
                                                    <ul className="list-group list-group-flush navbar-card-list-group">
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck1" checked />
                                                                            <label className="form-check-label" htmlFor="notificationCheck1"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <img className="avatar avatar-sm avatar-circle" src="https://placehold.co/100" alt="Image Description" />
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Brian Warner</h5>
                                                                    <p className="text-body fs-5">changed an issue from "In Progress" to <span className="badge bg-success">Review</span></p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">2hr</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}

                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck2" checked />
                                                                            <label className="form-check-label" htmlFor="notificationCheck2"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">K</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Klara Hampton</h5>
                                                                    <p className="text-body fs-5">mentioned you in a comment</p>
                                                                    <blockquote className="blockquote blockquote-sm">
                                                                        Nice work, love! You really nailed it. Keep it up!
                                                                    </blockquote>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">10hr</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}

                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck3" checked />
                                                                            <label className="form-check-label" htmlFor="notificationCheck3"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="https://placehold.co/100" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Ruby Walter</h5>
                                                                    <p className="text-body fs-5">joined the Slack group HS Team</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">3dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}

                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck4" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck4"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="https://placehold.co/100" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">from Google</h5>
                                                                    <p className="text-body fs-5">Start using forms to capture the information of prospects visiting your Google website</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">17dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}

                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck5" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck5"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="https://placehold.co/100" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Sara Villar</h5>
                                                                    <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary"></i> FD-7 task</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">2mn</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}
                                                    </ul>
                                                    {/* End List Group */}
                                                </div>

                                                <div className="tab-pane fade" id="notificationNavTwo" role="tabpanel" aria-labelledby="notificationNavTwo-tab">
                                                    {/* List Group */}
                                                    <ul className="list-group list-group-flush navbar-card-list-group">
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck6" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck6"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">A</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Anne Richard</h5>
                                                                    <p className="text-body fs-5">accepted your invitation to join Notion</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">1dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}

                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck7" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck7"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="https://placehold.co/100" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Finch Hoot</h5>
                                                                    <p className="text-body fs-5">left Slack group HS projects</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">1dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}

                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck8" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck8"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                                            <span className="avatar-initials">HS</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Htmlstream</h5>
                                                                    <p className="text-body fs-5">you earned a "Top endorsed" <i className="bi-patch-check-fill text-primary"></i> badge</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">6dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}

                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck9" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck9"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="https://placehold.co/100" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Linda Bates</h5>
                                                                    <p className="text-body fs-5">Accepted your connection</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">17dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}

                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck10" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck10"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">L</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Lewis Clarke</h5>
                                                                    <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary"></i> FD-134 task</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">2mts</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#/"></a>
                                                        </li>
                                                        {/* End Item */}
                                                    </ul>
                                                    {/* End List Group */}
                                                </div>
                                            </div>
                                            {/* End Tab Content */}
                                        </div>
                                        {/* End Body */}

                                        {/* Card Footer */}
                                        <a className="card-footer text-center" href="#/">
                                            View all notifications <i className="bi-chevron-right"></i>
                                        </a>
                                        {/* End Card Footer */}
                                    </div>
                                </div>
                            </div>
                            {/* End Notification */}
                        </li>

                        <li className="nav-item">
                            {/* Account */}
                            <div className="dropdown">
                                <a className="navbar-dropdown-account-wrapper" href="javascript:void(0);" id="accountNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                    <div className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="https://placehold.co/100" alt="Image Description" />
                                        <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                                    </div>
                                </a>

                                <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account" aria-labelledby="accountNavbarDropdown" style={{ width: '16rem' }}>
                                    <div className="dropdown-item-text">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="https://placehold.co/100" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="mb-0">User</h5>
                                                <p className="card-text text-body">user@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown-divider"></div>

                                    {/* Dropdown */}
                                    <div className="dropdown">
                                        <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="javascript:void(0);" id="navSubmenuPagesAccountDropdown1" data-bs-toggle="dropdown" aria-expanded="false">Set status</a>

                                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown1">
                                            <a className="dropdown-item" href="#/">
                                                <span className="legend-indicator bg-success me-1"></span> Available
                                            </a>
                                            <a className="dropdown-item" href="#/">
                                                <span className="legend-indicator bg-danger me-1"></span> Busy
                                            </a>
                                            <a className="dropdown-item" href="#/">
                                                <span className="legend-indicator bg-warning me-1"></span> Away
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#/"> Reset status
                                            </a>
                                        </div>
                                    </div>
                                    {/* End Dropdown */}

                                    <a className="dropdown-item" href="#/">Profile &amp; account</a>
                                    <a className="dropdown-item" href="#/">Settings</a>

                                    <div className="dropdown-divider"></div>

                                    {/* Dropdown */}
                                    <div className="dropdown">
                                        <a className="dropdown-item" href="#/">Sign out</a>
                                    </div>
                                </div>
                                {/* End Account */}
                            </div>
                        </li>
                    </ul>
                    {/* End Navbar */}
                </div>
            </div>
        </header>
    );
};

export default Header;