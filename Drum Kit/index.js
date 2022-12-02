const buttons = document.querySelectorAll(".drum");
const audio = [
  new Audio("sounds/crash.mp3") ,
  new Audio("sounds/kick-bass.mp3") ,
  new Audio("sounds/snare.mp3") ,
  new Audio("sounds/tom-1.mp3") ,
  new Audio("sounds/tom-2.mp3") ,
  new Audio("sounds/tom-3.mp3") ,
  new Audio("sounds/tom-4.mp3") ,
];

// Mouse hover detection
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", () => {
    makeSound(buttons[i].innerHTML) ;
    buttonPressed(buttons[i].innerHTML) ;
  });
}

// Key press detection
document.addEventListener("keypress", (event) =>{
  makeSound(event.key) ;
  buttonPressed(event.key) ;
})


// Making sound
function makeSound(key){
  let id = getId(key) ;
  audio[id].play() ;
}

function getId(key){
  switch(key){
    case "w":
      return 0 ;
    case "a":
      return 1 ;
    case "s":
      return 2 ;
    case "d":
      return 3 ;
    case "j":
      return 4 ;
    case "k":
      return 5 ;
    case "l":
      return 6 ;
  }
}

function buttonPressed(key){
  let activeButton = document.querySelector("."+key) ;
  activeButton.classList.add("pressed") ;
  setTimeout(()=>{
    activeButton.classList.remove("pressed") ;
  },100) ;
}