const Options = ({ options, updateFeedback, totalFeedback, reset }) => {
  return (
    <div>
      {Object.keys(options).map((option, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={(event) => {
              updateFeedback(event.target.textContent);
            }}
          >
            {option}
          </button>
        );
      })}
      {totalFeedback !== 0 ? (
        <button
          onClick={() => {
            reset();
          }}
          type="button"
        >
          reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
