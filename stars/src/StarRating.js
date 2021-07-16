import React from "react";
import Star from "./Star";
import { createArray } from "./utils";

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = index => index}) {

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}