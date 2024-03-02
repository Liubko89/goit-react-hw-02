import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem("state"));
    return savedState !== null
      ? {
          good: savedState.good,
          neutral: savedState.neutral,
          bad: savedState.bad,
        }
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const reset = () => {
    setState((prevState) => ({
      ...prevState,
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };

  const totalFeedback = state.good + state.neutral + state.bad;
  const positivePercentage = Math.round(
    ((state.good + state.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options
        options={state}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          stats={state}
          totalFeedback={totalFeedback}
          percentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
