import { useState } from "react";

const AddCustomTemplate = () => {
  const [formData, setFormData] = useState({
    templateTitle: "",
    description: "",
    templateIcon: "",
    templateColor: "#84e2e0",
    category: ["customer service"],
    packageType: "Regular",
    inputGroups: [
      {
        inputType: "Input Field",
        inputName: "",
        inputDescription: "",
      },
    ],
    createdInputs: "",
    customPrompt: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Category Change
  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (item) => item.value);
    setFormData({ ...formData, category: selectedOptions });
  };

  // Handle Package Change
  const handlePackageChange = (value) => {
    setFormData({ ...formData, packageType: value });
  };

  // Handle Input Group Change
  const handleInputGroupChange = (index, field, value) => {
    const updatedGroups = [...formData.inputGroups];
    updatedGroups[index][field] = value;
    setFormData({ ...formData, inputGroups: updatedGroups });
  };

  // Add Input Group
  const addInputGroup = () => {
    setFormData({
      ...formData,
      inputGroups: [
        ...formData.inputGroups,
        { inputType: "Input Field", inputName: "", inputDescription: "" },
      ],
    });
  };

  // Remove Input Group
  const removeInputGroup = (index) => {
    const updatedGroups = [...formData.inputGroups];
    updatedGroups.splice(index, 1);
    setFormData({ ...formData, inputGroups: updatedGroups });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Template Added Successfully!");
  };

  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="page-header-title">Add Custom Template</h1>
            </div>
          </div>
        </div>
        {/* End Page Header */}

        {/* Add Template Form */}
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="template-card mt-5">
              <form onSubmit={handleSubmit}>
                {/* Section 1: Template */}
                <div className="form-section">
                  <div className="section-header">
                    <div className="section-number">1</div>
                    <h5 className="mb-0 ttl">Template</h5>
                  </div>

                  {/* Template Title */}
                  <div className="mb-3">
                    <label className="form-label">Template Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="templateTitle"
                      value={formData.templateTitle}
                      onChange={handleChange}
                      placeholder="Enter Title Here"
                      required
                    />
                  </div>

                  {/* Template Description */}
                  <div className="mb-3">
                    <label className="form-label">Template Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter Description Here"
                      required
                    ></textarea>
                  </div>

                  {/* Template Icon */}
                  <div className="mb-3">
                    <label className="form-label">Template Icon</label>
                    <input
                      type="text"
                      className="form-control"
                      name="templateIcon"
                      value={formData.templateIcon}
                      onChange={handleChange}
                      placeholder="Paste SVG code from Tabler Icons"
                    />
                  </div>

                  {/* Template Color */}
                  <div className="mb-3">
                    <label className="form-label">Template Color</label>
                    <div className="d-flex justify-content-between">
                      <div className="color-picker">
                        <input
                          type="color"
                          name="templateColor"
                          value={formData.templateColor}
                          onChange={handleChange}
                        />
                        <span>{formData.templateColor}</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-light"
                        onClick={() => setFormData({ ...formData, templateColor: "#84e2e0" })}
                      >
                        Clear
                      </button>
                    </div>
                  </div>

                  {/* Template Category */}
                  <div className="mb-3">
                    <label className="form-label">Template Category</label>
                    <select
                      id="categoryDropdown"
                      className="form-select"
                      multiple
                      value={formData.category}
                      onChange={handleCategoryChange}
                    >
                      <option value="customer service">Customer Service</option>
                      <option value="business">Business</option>
                      <option value="blog">Blog</option>
                      <option value="advertising">Advertising</option>
                      <option value="advertisement">Advertisement</option>
                    </select>
                  </div>

                  {/* Package Type */}
                  <div className="mb-3">
                    <label className="form-label">Package Type</label>
                    <div className="dropdown">
                      <button
                        className="btn btn-light dropdown-toggle w-100 text-start"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {formData.packageType}
                      </button>
                      <ul className="dropdown-menu w-100">
                        {["Regular", "Premium", "Enterprise"].map((item) => (
                          <li key={item}>
                            <a
                              className={`dropdown-item ${
                                formData.packageType === item ? "active" : ""
                              }`}
                              href="#/"
                              onClick={() => handlePackageChange(item)}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2: Input Groups */}
                <div className="form-section input-group-section">
                  <div className="section-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="section-number">2</div>
                      <h5 className="mb-0">Input Groups</h5>
                    </div>
                    {/* Add Input Group */}
                    <button
                      type="button"
                      className="btn btn-light rounded-circle"
                      onClick={addInputGroup}
                    >
                      <svg
                        className="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                      </svg>
                    </button>
                  </div>

                  {/* Input Group Container */}
                  <div id="inputGroupContainer">
                    {formData.inputGroups.map((group, index) => (
                      <div className="input-group-block mb-3" key={index}>
                        <i
                          className="bi bi-dash-circle me-1 float-right removeInputGroup"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeInputGroup(index)}
                        ></i>

                        {/* Input Type */}
                        <div className="mb-3">
                          <label className="form-label">Select Input Type</label>
                          <select
                            className="form-control"
                            value={group.inputType}
                            onChange={(e) =>
                              handleInputGroupChange(index, "inputType", e.target.value)
                            }
                          >
                            <option>Input Field</option>
                            <option>Textarea</option>
                            <option>Dropdown</option>
                            <option>Checkbox</option>
                            <option>Radio Button</option>
                          </select>
                        </div>

                        {/* Input Name */}
                        <div className="mb-3">
                          <label className="form-label">Input Name</label>
                          <input
                            type="text"
                            className="form-control"
                            value={group.inputName}
                            onChange={(e) =>
                              handleInputGroupChange(index, "inputName", e.target.value)
                            }
                            placeholder="Enter Name Here"
                          />
                        </div>

                        {/* Input Description */}
                        <div className="mb-3">
                          <label className="form-label">Input Description</label>
                          <input
                            type="text"
                            className="form-control"
                            value={group.inputDescription}
                            onChange={(e) =>
                              handleInputGroupChange(index, "inputDescription", e.target.value)
                            }
                            placeholder="Enter Description Here"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Prompt */}
                <div className="form-section">
                  <div className="section-header">
                    <div className="section-number">3</div>
                    <h5 className="mb-0 ttl">Prompt</h5>
                  </div>

                  {/* Created Inputs */}
                  <div className="mb-3">
                    <label className="form-label">Created Inputs</label>
                    <input
                      type="text"
                      className="form-control"
                      name="createdInputs"
                      value={formData.createdInputs}
                      onChange={handleChange}
                      placeholder="Enter Title Here"
                    />
                  </div>

                  {/* Custom Prompt */}
                  <div className="mb-3">
                    <label className="form-label">Custom Prompt</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="customPrompt"
                      value={formData.customPrompt}
                      onChange={handleChange}
                      placeholder="Enter Prompt Here"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="btn-block">
                  <button type="submit" className="btn btn-md btn-theme w-100">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End Form Section */}
      </div>

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
    </main>
  );
};

export default AddCustomTemplate;
