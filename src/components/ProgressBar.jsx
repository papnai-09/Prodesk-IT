const ProgressBar = ({ step }) => {
  const width = (step / 3) * 100;

  return (
    <div className="progress-container">
      <p className="progress-text">
        Step {step} of 3
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;