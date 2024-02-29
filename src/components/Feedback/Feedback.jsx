import css from "./Feedback.module.css";

const Feedback = ({ stats, totalFeedback }) => {
  return (
    <div className={css.feedbackContainer}>
      {Object.keys(stats).map((state, index) => {
        return (
          <p key={index} className={css.feedback}>
            {state}: <span>{stats[state]}</span>
          </p>
        );
      })}
      <p className={css.feedback}>total: {totalFeedback}</p>
      <p className={css.feedback}>
        positive: {Math.round((stats.good / totalFeedback) * 100)}%
      </p>
    </div>
  );
};

export default Feedback;
