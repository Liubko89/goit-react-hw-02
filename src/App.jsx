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
          good: savedState.state.good,
          neutral: savedState.state.neutral,
          bad: savedState.state.bad,
        }
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify({ state }));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    feedbackType === "good"
      ? setState((prevState) => ({
          ...prevState,
          good: prevState.good + 1,
        }))
      : null;
    feedbackType === "neutral"
      ? setState((prevState) => ({
          ...prevState,
          neutral: prevState.neutral + 1,
        }))
      : null;

    feedbackType === "bad"
      ? setState((prevState) => ({
          ...prevState,
          bad: prevState.bad + 1,
        }))
      : null;
  };

  const reset = () => {
    setState((prevState) => ({
      ...prevState,
      good: 0,
    }));
    setState((prevState) => ({
      ...prevState,
      neutral: 0,
    }));
    setState((prevState) => ({
      ...prevState,
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
