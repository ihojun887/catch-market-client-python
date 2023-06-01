import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("TimerComponent render");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);

  return (
    <div>
      <h3>{time}초</h3>
      <button>1씩 증가</button>
    </div>
  );
}

export default TimerComponent;
