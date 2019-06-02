"use strict";
{
  let stack = [];
  let queue = [];

  function addToStack(value) {
    stack.push(value);
    rerender();
  }

  function removeFromStack() {
    const poppedElement = stack.pop();
    rerender();
    alert("Popped element:" + poppedElement);
  }

  function clearStack() {
    stack = [];
    rerender();
  }

  function addToQueue(value) {
    queue.push(value);
    rerender();
  }

  function removeFromQueue() {
    const poppedElement = queue.shift();
    rerender();
    alert("Popped element:" + poppedElement);
  }

  function clearQueue() {
    queue = [];
    rerender();
  }

  function rerender() {
    if (stack.length > 0) {
      document.getElementById("stack-value").innerHTML = stack.join(", ");
    } else {
      document.getElementById("stack-value").innerHTML = "Empty";
    }

    if (queue.length > 0) {
      document.getElementById("queue-value").innerHTML = queue.join(", ");
    } else {
      document.getElementById("queue-value").innerHTML = "Empty";
    }

    document.getElementById("stack-in").value = "";
    document.getElementById("queue-in").value = "";
  }

  window.onload = () => {
    document
      .getElementById("stack-submit")
      .addEventListener("click", () =>
        addToStack(document.getElementById("stack-in").value)
      );

    document
      .getElementById("queue-submit")
      .addEventListener("click", () =>
        addToQueue(document.getElementById("queue-in").value)
      );

    document
      .getElementById("stack-pop")
      .addEventListener("click", () => removeFromStack());

    document
      .getElementById("queue-pop")
      .addEventListener("click", () => removeFromQueue());

    document
      .getElementById("stack-clear")
      .addEventListener("click", () => clearStack());

    document
      .getElementById("queue-clear")
      .addEventListener("click", () => clearQueue());
  };
}
