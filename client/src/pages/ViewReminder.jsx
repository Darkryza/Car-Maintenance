import { useLocation } from "react-router-dom";

function ViewReminder() {
  const { state } = useLocation();
  console.log(state);
  if (!state) {
    return <div>No data</div>;
  }
  return (
    <>
      <h1>{state.service}</h1>
      <div>RM{state.cost}</div>
      <div>{state.location}</div>
      <div>{state.status}</div>
      <div>{state.remark}</div>
    </>
  );
}

export default ViewReminder;
