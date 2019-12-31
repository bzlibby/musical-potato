//start coding here

const button = document.getElementById("clickCounter");
let buttonClicks = 0;
button.onclick = function() {
  buttonClicks++;
  const clickCount = document.getElementById("clickCount");
  clickCount.innerHTML = "I have been clicked " + buttonClicks + " times!";
  console.log("button clicked");
};

//testing code down here - unrelated to the above code
