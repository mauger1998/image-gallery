import "./style.css";
import { populateImages } from "./populateImages.js";
import firstImage from "./Group 5.png"
import secondImage from "./Group 14 (1).png"
import thirdImage from "./Hydra Motorway Photo.png"

populateImages();

const imageOne = document.getElementById("image0");
const imageTwo = document.getElementById("image1");
const imageThree = document.getElementById("image2");
const rightButton = document.getElementById("rightButton");
const leftButton = document.getElementById("leftButton");
const superLongDiv = document.querySelector(".superLongDiv");

imageOne.src = firstImage;
imageTwo.src = thirdImage;

rightButton.addEventListener("click", (e) => {
  superLongDiv.classList.remove("slideRight")
    superLongDiv.classList.add("slideLeft");
})

leftButton.addEventListener("click", (e) => {
    superLongDiv.classList.remove("slideLeft")
     superLongDiv.classList.add("slideRight");
})


