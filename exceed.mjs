window.exceed = () => {
let tip = d3.select(".d3-tip");

// Get the height of the tip element
let tipHeight = tip.node().offsetHeight;

// Get the current position of the tip
let {top, left} = tip.style();

// Convert top and left to numbers
top = +top.replace("px", "");
left = +left.replace("px", "");

// Get the height of the window
let windowHeight = window.innerHeight;

// Check if the tip exceeds the dimensions of the web page
if (top - tipHeight < 0) {
  // If it does, change the position of the tip to be below the mouse pointer
  tip.style("top", `${top + tipHeight + 20}px`);
}
}
export default {exceed};