import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Snake_ActionType } from "../../../../redux/snake/ActionType";

let startTouch = { x: 0, y: 0 };
let endTouch = { x: 0, y: 0 };
const Controller = () => {
  //* store movement of coordinate touch

  useEffect(() => {
    //* scope keyPress
    window.addEventListener("keydown", handleOnPressKey);
    //* scope touchStart
    window.addEventListener("touchstart", touchStart);
    //* scope touchEnd
    window.addEventListener("touchend", touchEnd);
  }, []);

  //* set coordinate of touch where start
  const touchStart = (e: TouchEvent) => {
    startTouch = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
  };
  //* set coordinate of touch where End and dedicate direction with coordinate of start touch
  const touchEnd = (e: TouchEvent) => {
    endTouch = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    //check how much x and y change
    let Move_Total_x = Math.abs(endTouch.x - startTouch.x);
    let Move_Total_y = Math.abs(endTouch.y - startTouch.y);
    //console.log(e.changedTouches[0].clientX);

    //virtual
    if (Move_Total_x > Move_Total_y) {
      //check Right or Left
      if (startTouch.x - endTouch.x > 0) DirectionDispatch("left");
      else if (startTouch.x - endTouch.x < 0) DirectionDispatch("right");
    }
    // horizon
    else {
      //check up or down
      if (startTouch.y - endTouch.y > 0) DirectionDispatch("up");
      else if (startTouch.y - endTouch.y < 0) DirectionDispatch("down");
    }
  };
  //* handleKeyPress

  const handleOnPressKey = (e: KeyboardEvent) => {
    //!KEY LIST
    /* 
    W , ArrowUp     =>>   up
    D , ArrowRight  =>>   right
    S , ArrowDown   =>>   down
    A , ArrowLeft   =>>   left
    */
    switch (e.code) {
      case "KeyW":
      case "ArrowUp":
        DirectionDispatch("up");
        break;
      case "KeyD":
      case "ArrowRight":
        DirectionDispatch("right");
        break;
      case "KeyS":
      case "ArrowDown":
        DirectionDispatch("down");
        break;
      case "KeyA":
      case "ArrowLeft":
        DirectionDispatch("left");
      default:
        break;
    }
  };

  //* dispatch direction
  const dispatch = useDispatch();
  const DirectionDispatch = (direction: string) => {
    dispatch({ type: Snake_ActionType.DIRECTION, payload: direction });
  };

  return null;
};

export default Controller;
