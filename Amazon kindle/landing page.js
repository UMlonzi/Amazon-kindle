let currentScrollPosition = 0;
let scrollAmount = 400;
const  sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");
btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
function scrollHorizontally(val){
    currentScrollPosition += (val * scrollAmount);
    sCont.style.left = currentScrollPosition + "px";
    if(currentScrollPosition >= 0){
          currentScrollPosition = 0
          btnScrollLeft.style.opacity = "0";
    }
    else{
      btnScrollLeft.style.opacity = "1";
    }
    if(currentScrollPosition <= maxScroll){
        currentScrollPosition = maxScroll;
        btnScrollRight.style.opacity = "0";
    }
    else{
      btnScrollRight.style.opacity = "1";
    }
    sCont.style.left=currentScrollPosition + "px"; 
}

function changeTheImage(){
  const img=document.getElementById("userimage");
  img.src=localStorage.getItem("file");
  document.getElementById("userName").innerText = localStorage.getItem("Is_name_and_surname");
}

function myPopUpOne(){
  document.getElementById("myPopup").style.display = "block";
}
function myPopUpTwo() {
  document.getElementById("myPopup2").style.display = "block";
}
function myPopUpThree() {
  document.getElementById("myPopup3").style.display = "block";
}  
function myPopUpFour() {
  document.getElementById("myPopup4").style.display = "block";
}
function myPopUpFive() {
  document.getElementById("myPopup5").style.display = "block";
}
function closeForm() {
  document.getElementById("myPopup").style.display = "none";
}
function closeForm() {
  document.getElementById("myPopup").style.display = "none";
}
function closeFormTwo() {
  document.getElementById("myPopup2").style.display = "none";
}
function closeFormThree() {
  document.getElementById("myPopup3").style.display = "none";
}
function closeFormFour() {
  document.getElementById("myPopup4").style.display = "none";
}
function closeFormFive() {
  document.getElementById("myPopup5").style.display = "none";
}


// let count = 0;
// const valueDisplay = document.getElementById(valueDisplay);

// function increment () {
//   count++;
//   valueDisplay.innerText = count;
// }
//   function decrement(){
//   count--;
//   valueDisplay.innerText = count;
//   }

 