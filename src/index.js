import "./reset.css";
import "./style.css";
import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";

(function(){
    const content = document.querySelector("#content")
    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector("#menu-button");
    const aboutButton = document.querySelector("#about");
    homeButton.addEventListener("click",()=>{
        content.textContent="";
        homeContent();
    })
    menuButton.addEventListener("click",()=>{
        content.textContent="";
        menuContent();
    })
    aboutButton.addEventListener("click",()=>{
        content.textContent="";
        aboutContent();
    })
    homeContent()
}())