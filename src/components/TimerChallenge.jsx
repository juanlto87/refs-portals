import {useState, useRef} from "react";
import ResultModal from "./ResultModal";
// let timer;

export default function TimerChallenge({title, targetTime}) {
  const timer = useRef();
  const dialog = useRef();

  const [remainigTime, setRemainingTime] = useState(targetTime * 1000);
  const timerIsActive = remainigTime > 0 && remainigTime < targetTime * 1000;

  if (remainigTime <= 0) {
    clearInterval(timer.current);
    setRemainingTime(targetTime * 1000);
    dialog.current.showModal();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>{" "}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
