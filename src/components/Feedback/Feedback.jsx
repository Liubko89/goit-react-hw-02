const Feedback = ({ stats, totalFeedback }) => {
  return (
    <div>
      {Object.keys(stats).map((state, index) => {
        return (
          <p key={index}>
            {state}:<span>{stats[state]}</span>
          </p>
        );
      })}
      <p>total: {totalFeedback}</p>
      <p>positive: {Math.round((stats.good / totalFeedback) * 100)}%</p>
    </div>
  );
};

export default Feedback;
