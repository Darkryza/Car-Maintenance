import { useLocation } from "react-router-dom";

function ViewReminder() {
  const { state } = useLocation();
  console.log(state);
  if (!state) {
    return <div>No data</div>;
  }
  return <></>;
}

export default ViewReminder;
