const Feedback = ({ stats }) => {
  return (
    <div>
      {Object.keys(stats).map((state, index) => {
        return (
          <p key={index}>
            {state}:<span>{stats[state]}</span>
          </p>
        );
      })}
    </div>
  );
};

export default Feedback;
