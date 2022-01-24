import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialState } from "../../../../../redux/store";

const HighScore = () => {
  const [hightScore, setHightScore] = useState(0);

  const gameOver = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.gameOver
  );

  const score = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.score
  );

  //! access to stoage
  useEffect(() => {
    const storageScore = localStorage.getItem("highScore");
    if (storageScore) {
      setHightScore(parseInt(storageScore));
    } else {
      localStorage.setItem("highScore", "0");
    }
  }, []);
  //! set Hight Score
  useEffect(() => {
    if (gameOver) {
      if (score > hightScore) {
        localStorage.setItem("highScore", `${score}`);
        setHightScore(parseInt(score));
      }
    }
  }, [gameOver]);

  return <span>{hightScore}</span>;
};

export default HighScore;
