let currentScrollPosition = 0;
let scrollAmount = 320;
const sCont = document.querySelector(".story-container");
const hScroll = document.querySelector(".horizontal-scroll");
let maxScroll = -sCont.offserWidth + hScroll.offserWidth;
function ScrollHorizontally(val){
  currentScrollPosition += (val * scrollAmount);
  if(currentScrollPosition > 0){
  currentScrollPosition = 0;
}
if(currentScrollPosition > 0){
  currentScrollPosition = maxScroll;
}
sCont.style.left = currentScrollPosition + "px";
}