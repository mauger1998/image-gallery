import "./style.css";
import { populateImages } from "./populateImages.js";
import firstImage from "./Group 5.png"
import secondImage from "./Group 14 (1).png"
import thirdImage from "./Hydra Motorway Photo.png"

populateImages();

const imageOne = document.getElementById("image0");
const imageTwo = document.getElementById("image1");
const imageThree = document.getElementById("image2");

imageOne.src = firstImage;
imageTwo.src = thirdImage;


