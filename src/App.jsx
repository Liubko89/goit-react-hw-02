import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setState((state[feedbackType] = 1));
    console.log(feedbackType, state[feedbackType]);
  };

  return (
    <div>
      <Description />
      <Options options={state} updateFeedback={updateFeedback} />
      {/* <Feedback stats={state} /> */}
    </div>
  );
}

export default App;
