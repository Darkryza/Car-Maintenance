import { useState } from "react";
import { Link } from "react-router-dom";
import "./AddReminderPage.css";
import axios from "axios";

const AddReminderPage = () => {
  const [values, setValues] = useState({
    service: "",
    cost: "",
    location: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const res = await axios.post(
        "http://localhost:5484/reminder/addReminder",
        formData,
        { withCredentials: true },
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page addReminderPage">
      <div className="top">
        <h1>New Form</h1>
      </div>
      <div className="left">
        <label htmlFor="service">Service</label>
        <input type="text" id="service" onChange={handleChange} />
        <label htmlFor="cost">Cost</label>
        <input type="text" id="cost" onChange={handleChange} />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" onChange={handleChange} />
        <label htmlFor="receipt">Image</label>
        <div className="file-input">
          <label htmlFor="receipt" className="select-file-btn">
            {values.file ? values.file.name : "Select File"}
          </label>
          <label htmlFor="receipt" className="upload-file-btn">
            Upload file
          </label>
          <input type="file" id="receipt" name="file" onChange={handleChange} />
        </div>
        <label htmlFor="status">Status</label>
        <select name="status" id="status">
          <option value="">-Select-</option>
          <option value="done">Done</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="right">
        <label htmlFor="remark">Remark</label>
        <textarea name="remark" id="remark"></textarea>
      </div>
      <div className="bottom">
        <Link to="/reminder">{"< Back"}</Link>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default AddReminderPage;
