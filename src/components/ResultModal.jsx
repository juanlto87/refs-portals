import {createPortal} from "react-dom";

export default function ResultModal({ref, targetTime, timeRemaining, onReset}) {
  const formattedTimeRemaining = Math.abs(timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  return createPortal(
    <dialog ref={ref} className="result-modal">
      <h2> {timeRemaining <= 0 ? "You Lost" : undefined}</h2>
      <h2>Your Score: {score}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with
        <strong> {formattedTimeRemaining} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
