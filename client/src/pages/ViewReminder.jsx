import { useLocation } from "react-router-dom";
import "./ViewReminder.css";

function ViewReminder() {
  const { state } = useLocation();
  console.log(state);
  if (!state) {
    return <div>No data</div>;
  }
  return (
    <div className="page ViewReminder-container">
      <div className="top">
        <div className="contents">
          <div className="title">
            <h1>{state.service}</h1>
          </div>
          <div className="details">
            <div className="detail">
              <ul>
                <li>{state.cost}</li>
                <li>{state.location}</li>
                <li>{state.status}</li>
                <li>{state.remark}</li>
              </ul>
            </div>
            <div className="img">
              {state.file && (
                <img
                  src={`http://localhost:5484/images/${state.file}`}
                  alt="receipt"
                />
              )}
            </div>
            <div className="status">
              <h2>Status</h2>
              <div className="btn-done">Done</div>
              <div className="btn-pending">Pending</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default ViewReminder;
