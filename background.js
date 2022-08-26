

const eventTrigger = document.getElementById("liveEventBtn");
var colors = ["#ffefcd", "#7FFFD4", "cyan"];
var idx = 0;

eventTrigger.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = colors[++idx % 3];
})
