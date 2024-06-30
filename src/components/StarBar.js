/**
 * The `StarBar` component renders a dynamic star rating system.
 *
 * Props:
 * - `numOfStars`: The total number of stars to display.
 * - `numOfFilledStars`: The initial number of filled stars.
 * - `displayOnly`: If true, the star bar is non-interactive and only for display.
 *
 * State:
 * - `filledStars`: Tracks the number of stars that should be filled.
 * - `stars`: An array of star objects that determine the filled state of each star.
 *
 * Functions:
 * - `renderStars`: Initializes the `stars` state with an array of star objects.
 *   Each object contains a `starNo` (unique identifier) and `isFilled` (filled state).
 * - `handleMouseIn`: Updates the `stars` state to fill stars up to the one the mouse is over.
 *   It's not executed if `displayOnly` is true.
 * - `handleMouseOut`: Resets the `stars` state to reflect the current `filledStars` value
 *   when the mouse leaves a star. It's not executed if `displayOnly` is true.
 * - `handleClick`: Updates the `filledStars` state to the clicked star's number.
 *   It's not executed if `displayOnly` is true.
 *
 * The component renders a series of `Star` subcomponents, each representing an individual star.
 * The `Star` subcomponent receives props to handle click and mouse events, which update the
 * component's state and consequently the visual representation of the star bar.
 *
 * @format
 */

import { useState } from "react";
import filledStar from "../assets/icons/filledStar.svg";
import notFilledStar from "../assets/icons/unFilledStar.svg";

function Star({ isFilled, onClick, onMouseIn, onMouseOut }) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
      style={{
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <img src={isFilled ? filledStar : notFilledStar} />
    </button>
  );
}

export function StarBar({
  numOfStars = 5,
  numOfFilledStars = 0,
  displayOnly = false,
  rtl = false,
}) {
  const [filledStars, setFilledStars] = useState(numOfFilledStars);
  const [stars, setStars] = useState(renderStars);

  /**
   * Initializes the `stars` state with an array of star objects created by the `renderStars` function.
   * `renderStars` generates an array representing a series of stars, where each star is an object with:
   * - `starNo`: the unique number of the star, starting from 0.
   * - `isFilled`: a boolean indicating whether the star is filled or not.
   * The stars are filled up to the `filledStars` index, which is determined outside this function.
   * The `unshift` method is used to add each new star to the beginning of the array, resulting in stars ordered from highest to lowest.
   */
  function renderStars() {
    const starsArr = [];
    for (let i = 0; i < numOfStars; i++) {
      if (rtl) {
        starsArr.unshift({
          starNo: i,
          isFilled: i <= filledStars,
        });
      } else {
        starsArr.push({
          starNo: i,
          isFilled: i <= filledStars,
        });
      }
    }
    return starsArr;
  }

  /**
   * `handleMouseIn` is a function that updates the `stars` state based on mouse interaction.
   * It takes a number `no` as an argument, which represents the star number that the mouse is currently over.
   * If the component is in `displayOnly` mode, the function exits without making any changes.
   * Otherwise, it sets the `stars` state to a new array where each `star` object is updated:
   * - `star` objects with a `starNo` less than or equal to `no` are marked as `isFilled: true`.
   * - All other `star` objects are marked as `isFilled: false`.
   * This function is typically used to visually fill the stars up to the one the mouse is over.
   */
  function handleMouseIn(no) {
    if (displayOnly) return;
    setStars((pre) =>
      pre.map((ele) =>
        ele.starNo <= no
          ? { ...ele, isFilled: true }
          : { ...ele, isFilled: false }
      )
    );
  }

  //This function will be called when the mouse goes outside the star
  //SO when the user click the star, the filledStars state will be updated,
  //Then because the user will go out of the star the renderStars function will get called.
  function handleMouseOut(no) {
    if (displayOnly) return;
    setStars(renderStars);
  }

  function handleClick(no) {
    if (displayOnly) return;
    setFilledStars(no);
  }

  return (
    <div>
      {!displayOnly
        ? stars.map((ele) => (
            <Star
              key={ele.starNo}
              isFilled={ele.isFilled}
              onMouseIn={() => handleMouseIn(ele.starNo)}
              onMouseOut={() => handleMouseOut(ele.starNo)}
              onClick={() => handleClick(ele.starNo)}
            />
          ))
        : stars.map(
            (ele) =>
              ele.isFilled && (
                <Star
                  key={ele.starNo}
                  isFilled={ele.isFilled}
                  onMouseIn={() => handleMouseIn(ele.starNo)}
                  onMouseOut={() => handleMouseOut(ele.starNo)}
                  onClick={() => handleClick(ele.starNo)}
                />
              )
          )}
    </div>
  );
}
