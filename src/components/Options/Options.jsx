const Options = ({ options, updateFeedback }) => {
  return (
    <div>
      {Object.keys(options).map((option, index) => {
        return (
          <button
            key={index}
            onClick={(event) => {
              updateFeedback(event.target.textContent);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
