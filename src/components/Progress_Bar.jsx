import { useState, useEffect } from "react";

const Progress_Bar = () => {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    let timerId = setInterval(() => {
      //   console.log("bar");
      setBar((prevBar) => {
        if (prevBar >= 100) {
          clearInterval(timerId);
          return prevBar;
        }
        return prevBar + 5;
      });
    }, 300);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="container">
      <div className="progress">
        <div
          className="progress-bar"
          style={{ transform: `translateX(${bar - 100}%)` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress_Bar;
