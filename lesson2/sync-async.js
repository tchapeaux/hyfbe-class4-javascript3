"use strict";
{
  let textContent = "";

  function addToText(text) {
    textContent += "<br/>" + text;
    document.getElementById("div-output").innerHTML = textContent;
  }

  function onClear() {
    textContent = "";
    document.getElementById("div-output").innerHTML = textContent;
  }

  function setSyncTimeout(callback, delay) {
    const stopTime = Date.now() + delay;
    while (Date.now() < stopTime);
    callback();
  }

  function onSyncClick() {
    addToText("start sync timer");
    setSyncTimeout(function onTimeout() {
      addToText("stop sync timer");
    }, 2000);
  }

  function onAsyncClick() {
    addToText("start async timer");
    setTimeout(function onTimeout() {
      addToText("stop async timer");
    }, 2000);
  }

  function onHelloClick() {
    addToText("Hello, world!");
  }

  window.onload = () => {
    document.getElementById("btn-clear").addEventListener("click", onClear);
    document.getElementById("btn-sync").addEventListener("click", onSyncClick);

    document
      .getElementById("btn-async")
      .addEventListener("click", onAsyncClick);

    document
      .getElementById("btn-hello")
      .addEventListener("click", onHelloClick);
  };
}
