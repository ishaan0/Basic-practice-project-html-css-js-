

function rand(max){
  return Math.floor(Math.random() * max) ;
}


let a = rand(6) + 1 , b = rand(6) + 1 ;

let pathStart = "images/dice", pathEnd = ".png" ;


let element = document.querySelectorAll(".dice img") ;
element[0].src = pathStart + a.toString() +pathEnd ; 
element[1].src = pathStart + b.toString() +pathEnd ; 

if(a > b){
  document.querySelector(".container h1").innerHTML = "Player 1 Wins" ;
}
else if(b > a){
  document.querySelector(".container h1").innerHTML = "Player 2 Wins" ;
}
else{
  document.querySelector(".container h1").innerHTML = "Match Drawn" ;

}