let body = document.querySelector("body")

let myArryLenght = 0


function aniCircle(e){



    if(myArryLenght < 30){
  let circleDive = document.createElement("div")
  circleDive.classList = "circle";
  let divClass = document.querySelectorAll(".circle")
  let myArry = Array.from(divClass)
  myArryLenght = myArry.length
  console.log(myArry.length)
  body.appendChild(circleDive);
  circleDive.style.transition = "all .5s linear"
  circleDive.style.left = e.clientX + "px"
  circleDive.style.top = e.clientY + "px"
  circleDive.style.left = circleDive.offsetLeft - 40 + "px";
  circleDive.style.visibility = "hidden"
//   console.log(myArry)
  


}else{
    body.innerHTML = ""
    myArryLenght = 0
}


}

document.addEventListener("mousemove",aniCircle)