// Write your code here

const bulb1 = document.querySelector("#lightbulb1");
const bulb2 = document.querySelector("#lightbulb2");
const bulb3 = document.querySelector("#lightbulb3");

const output =  document.querySelector(".subtitle");

let count = 0;

bulb1.addEventListener("click", function() {
  count++;

  output.innerHTML = `You've clicked the lights
  ${count} times`;

  console.log(count);
  bulb1.classList.toggle("active");
});

bulb2.addEventListener("click", function() {
  count++;

  output.innerHTML = `You've clicked the lights
  ${count} times`;

  console.log(count);
  bulb2.classList.toggle("active");
});

bulb3.addEventListener("click", function() {
  count++;

  output.innerHTML = `You've clicked the lights
  ${count} times`;

  console.log(count);
  bulb3.classList.toggle("active");
});
