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
        <h1>{state.service}</h1>
        <div className="contents">
          <div className="details">
            <ul>
              <li>RM{state.cost}</li>
              <li>{state.location}</li>
              <li>{state.status}</li>
              <li>{state.remark}</li>
            </ul>
          </div>
          <div className="img">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="bottom"></div>
      {/* <h1>{state.service}</h1>
      <div>RM{state.cost}</div>
      <div>{state.location}</div>
      <div>{state.status}</div>
      <div>{state.remark}</div> */}
    </div>
  );
}

export default ViewReminder;
