import Countdown from "react-countdown";

const CountdownTimer = ({ onComplete }) => {
  // Set the birthday date to May 19, 2025, 00:00:00
  const birthdayDate = new Date("2025-05-19T00:00:00").getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      onComplete();
      return null;
    }
    return (
      <div>
        <h3 className="countdown-header">Countdown to Your Special Day:</h3>
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-value">{days}</span>
            <p className="countdown-label">Days</p>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{hours}</span>
            <p className="countdown-label">Hours</p>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{minutes}</span>
            <p className="countdown-label">Minutes</p>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{seconds}</span>
            <p className="countdown-label">Seconds</p>
          </div>
        </div>
      </div>
    );
  };

  return <Countdown date={birthdayDate} renderer={renderer} />;
};

export default CountdownTimer;