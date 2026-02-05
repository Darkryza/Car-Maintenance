import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PreviewServicePage.css";

const PreviewServicePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No data to preview</p>;
  }

  const handleConfirm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(state).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await axios.post(
        "http://localhost:5484/services/addService",
        formData,
        { withCredentials: true },
      );
      console.log(res.data);
      if (res.data.status) {
        alert(res.data.message);
        navigate("/services");
      }
    } catch (err) {
      console.log(err);
      alert("Submit failed");
    }
  };

  return (
    <div className="page previewServicePage">
      <h1>{state.service}</h1>
      <div className="receipt-img">
        {state.file && (
          <img src={URL.createObjectURL(state.file)} alt="receipt" />
        )}
      </div>
      <div className="details">
        <ul>
          <li>
            {new Date(state.date).toLocaleDateString("ms-MY", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </li>
          <li>RM{Number(state.cost).toFixed(2)}</li>
          <li>{state.location}</li>
          <li>{state.contact}</li>
          <li>
            <a href={state.link}>{state.link}</a>
          </li>
          <li>{state.remark}</li>
        </ul>
      </div>
      <div className="btn">
        <Link to="/services" className="link">
          Back
        </Link>
        <button className="btn-submit" onClick={handleConfirm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PreviewServicePage;
