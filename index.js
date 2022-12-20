/**
 * Yerim Heo
 * 10/17/2020
 * CSE 154 AF Wilson Tang
 *
 * This is the "index.js" file for my creative project 2.
 * It plays the frog's dialogues as well as audio and animations.
 */
"use strict";

(function() {
  /**
   * Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", init);

  const RAIN_NUM = 22;
  const TEA_NUM = 33;

  /**
   * Initializes the dialogue and executes events for click
   */
  function init() {
    let count = -1;
    let array = dialogue();
    let frog = qs("img");
    frog.addEventListener("click", function() {
      if (count < array.length - 1) {
        count++;
        ribbit(array, count);
      }
    });
  }

  /**
   * Makes the frog ribbit and continues the dialogue
   * @param {array} arr Array of dialogue
   * @param {number} count Current number of dialogue line
   */
  function ribbit(arr, count) {
    let audio = new Audio("frog.wav");
    audio.volume = 0.3;
    audio.play();
    qs("p").innerText = arr[count];
    if (count === RAIN_NUM) {
      rain();
    }
    if (count === TEA_NUM) {
      tea();
    }
  }

  /**
   * Makes the rain animation appear
   */
  function rain() {
    qs("body").classList.add("rain");
    let audio = new Audio("rain.wav");
    audio.volume = 0.3;
    audio.play();
    audio.loop = true;
  }

  /**
   * Makes the cup of tea appear
   */
  function tea() {
    let bod = qs("body");
    let teaImg = document.createElement("img");
    teaImg.src = "tea.png";
    teaImg.id = "tea";
    bod.appendChild(teaImg);
  }

  /**
   * Contains all lines of dialogue for frog
   * @returns {object} the array of dialogue
   */
  function dialogue() {
    let array = ["I would offer to make you some tea, but...",
      "I am but a 2D frog displayed on this webpage.",
      "And it appears my creator is too lazy to paint a cup of tea.",
      "So I advise you to make yourself a cup of tea. Getting up from your desk " +
      "will do you much good.", "When you come back, we can have a conversation.",
      "Oh, back already?",
      "Let me guess, you didn't get up at all and you are just rapidly clicking " +
      "your mouse to see what I will say next.", "Humans are always such curious creatures.",
      "They never can go long without trying to uncover every little secret.",
      "Even things they should not know.",
      "If you find my secret without going into the \"index.js\" file, I will " +
      "be very impressed.",
      "Of course, if you are reading this, you are mostly likely a TA or " +
      "instructor so you will have to look.", "What a shame.",
      "Ah, I have talked too much. Tell me your troubles. I will listen and be silent.",
      "...", "I see.", "...", "Know this: that your feelings are valid.",
      "And that it is okay to cry.", "...", "It is okay to cry.", "...", "Oh.",
      "It is raining.",
      "The creator is apparently too lazy to paint a mug, but will gladly animate rain.",
      "What a strange being.", "And it appears the gif does not play properly.",
      "My apologies. My powers are limited.", "...",
      "Well, I am nearing my end.", "The creator has run out of ideas for dialogue.",
      "I hope you have enjoyed your time with me.", "...", "Ah, look!",
      "They did paint a mug of tea.", "Feel free to sit with me and rest for a while.", "...",
      "A brief thank you to hikeart for my beautiful croak,",
      "As well as Free Sound Library for the rain sounds.", ""];
    return array;
  }

  /** ------------------------------ Helper Functions  ------------------------------ */
  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} the first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();