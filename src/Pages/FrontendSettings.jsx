import React, { useState } from "react";

const FrontendSettings = () => {
  const [formData, setFormData] = useState({
    siteName: "",
    siteUrl: "",
    siteEmail: "",
    registration: "",
    preHeader: "",
    heroTitle: "",
    heroButton: "",
    footerUrl: "",
    footerCopyright: "",
    footerTextColor: "#84e2e0",
    pricingSection: "",
    facebookAddress: "https://www.facebook.com/",
    twitterAddress: "https://twitter.com/",
    instagramAddress: "https://www.instagram.com/",
    customLandingUrl: "",
    customCssUrl: "",
    customJsUrl: "",
    codeHead: "",
    codeBody: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <main id="content" role="main" className="main">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="page-header-title">Frontend Settings</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="template-card mt-5">
              <form onSubmit={handleSave}>
                {/* General Settings */}
                <FormSection number="1" title="General Settings">
                  <InputField
                    label="Site Name"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleChange}
                    placeholder="Enter Site Name"
                  />
                  <InputField
                    label="Site URL"
                    name="siteUrl"
                    value={formData.siteUrl}
                    onChange={handleChange}
                    placeholder="Enter Site URL"
                  />
                  <InputField
                    label="Site Email"
                    name="siteEmail"
                    value={formData.siteEmail}
                    onChange={handleChange}
                    placeholder="Enter Site Email"
                  />
                  <SelectField
                    label="Registration Active"
                    name="registration"
                    value={formData.registration}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "-- Select Registration --" },
                      { value: "active", label: "Active" },
                      { value: "passive", label: "Passive" },
                    ]}
                  />
                </FormSection>

                {/* Frontend Settings */}
                <FormSection number="2" title="Frontend Settings">
                  <SelectField
                    label="PreHeader Section"
                    name="preHeader"
                    value={formData.preHeader}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "-- Select PreHeader --" },
                      { value: "active", label: "Active" },
                      { value: "passive", label: "Passive" },
                    ]}
                  />
                  <InputField
                    label="Hero Title Text Rotator"
                    name="heroTitle"
                    value={formData.heroTitle}
                    onChange={handleChange}
                    placeholder="Generator,Chatbot,Assistant"
                  />
                  <InputField
                    label="Hero Button"
                    name="heroButton"
                    value={formData.heroButton}
                    onChange={handleChange}
                    placeholder="See how it works"
                  />
                  <InputField
                    label="Footer Button URL (Please enter full URL)"
                    name="footerUrl"
                    value={formData.footerUrl}
                    onChange={handleChange}
                    placeholder="Enter button URL"
                  />
                  <InputField
                    label="Footer Copyright"
                    name="footerCopyright"
                    value={formData.footerCopyright}
                    onChange={handleChange}
                    placeholder="Enter Footer Copyright"
                  />
                  <ColorPicker
                    label="Footer Text Color"
                    name="footerTextColor"
                    value={formData.footerTextColor}
                    onChange={handleChange}
                  />
                  <SelectField
                    label="Pricing Section"
                    name="pricingSection"
                    value={formData.pricingSection}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "-- Select Pricing --" },
                      { value: "active", label: "Active" },
                      { value: "passive", label: "Passive" },
                    ]}
                  />
                </FormSection>

                {/* Footer Social Media Settings */}
                <FormSection number="3" title="Footer Social Media Settings">
                  <InputField
                    label="Facebook Address"
                    name="facebookAddress"
                    value={formData.facebookAddress}
                    onChange={handleChange}
                    type="url"
                  />
                  <InputField
                    label="Twitter Address"
                    name="twitterAddress"
                    value={formData.twitterAddress}
                    onChange={handleChange}
                    type="url"
                  />
                  <InputField
                    label="Instagram Address"
                    name="instagramAddress"
                    value={formData.instagramAddress}
                    onChange={handleChange}
                    type="url"
                  />
                </FormSection>

                {/* Advanced Settings */}
                <FormSection number="4" title="Advanced Settings">
                  <InputField
                    label="Custom Landing Page URL"
                    name="customLandingUrl"
                    value={formData.customLandingUrl}
                    onChange={handleChange}
                    placeholder="Enter Custom Landing Page URL"
                  />
                  <InputField
                    label="Custom CSS URL"
                    name="customCssUrl"
                    value={formData.customCssUrl}
                    onChange={handleChange}
                    placeholder="Enter Custom CSS URL"
                  />
                  <InputField
                    label="Custom JS URL"
                    name="customJsUrl"
                    value={formData.customJsUrl}
                    onChange={handleChange}
                    type="url"
                    placeholder="Enter Custom JS URL"
                  />
                  <TextAreaField
                    label="Code before &lt;/head&gt;"
                    name="codeHead"
                    value={formData.codeHead}
                    onChange={handleChange}
                  />
                  <TextAreaField
                    label="Code before &lt;/body&gt;"
                    name="codeBody"
                    value={formData.codeBody}
                    onChange={handleChange}
                  />
                </FormSection>

                <div className="btn-block mt-3">
                  <button type="submit" className="btn btn-md btn-theme w-100">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

// ================== Reusable Components ==================

const FormSection = ({ number, title, children }) => (
  <div className="form-section">
    <div className="section-header">
      <div className="section-number">{number}</div>
      <h5 className="mb-0 ttl">{title}</h5>
    </div>
    {children}
  </div>
);

const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
      placeholder={placeholder}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="form-control form-select w-100"
    >
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({ label, name, value, onChange }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
      style={{ minHeight: "250px", resize: "inherit", boxShadow: "none" }}
    />
  </div>
);

const ColorPicker = ({ label, name, value, onChange }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input
      type="color"
      name={name}
      value={value}
      onChange={onChange}
      className="form-control form-control-color"
    />
  </div>
);

const Footer = () => (
  <div className="footer">
    <div className="row justify-content-between align-items-center">
      <div className="col text-center">
        <p className="fs-6 mb-0">
          &copy; <span className="d-none d-sm-inline-block">2025 Skill Tricks.</span>
        </p>
      </div>
    </div>
  </div>
);

export default FrontendSettings;
