"use strict";
{
  function synTimeout(delay) {
    const stopTime = Date.now() + delay;
    while (Date.now() < stopTime);
  }

  function count_down(value) {
    value = Math.round(value);
    value = Math.max(0, value);

    console.log(value);
    if (value > 0) {
      count_down(value - 1);
    }
  }

  window.onload = () => {
    document
      .getElementById("btn-sync")
      .addEventListener("click", function onSyncClick() {
        console.log("start sync timer");
        synTimeout(5000);
        console.log("stop sync timer");
      });

    document
      .getElementById("btn-async")
      .addEventListener("click", function onAsyncClick() {
        console.log("start async timer");
        setTimeout(function onTimeout() {
          console.log("stop async timer");
        }, 5000);
      });

    document
      .getElementById("btn-hello")
      .addEventListener("click", function onHelloClick() {
        console.log("Hello, world!");
      });

    document
      .getElementById("btn-countdown")
      .addEventListener("click", function onCountdownClick() {
        const number_value = document.getElementById("input-number").value;
        count_down(number_value);
      });
  };
}
