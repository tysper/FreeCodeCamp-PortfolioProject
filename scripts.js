"use strict";

const leftText = document.querySelector(".left");
const rightText = document.querySelector(".right");

while (document.readyState !== "complete") {
  continue;
};

if (document.readyState === "complete") {
  leftText.classList.add("text-welcoming-animation");
  rightText.classList.add("text-welcoming-animation");
};