import pizza from "./resources/pizza.jpg";

export function homeContent(){
    const content = document.querySelector("#content");
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute("id","home");
    content.appendChild(homeDiv);
    const img = document.createElement("img");
    img.src= pizza;
    const textDiv = document.createElement("div");
    textDiv.setAttribute("class","text");
    homeDiv.appendChild(img);
    homeDiv.appendChild(textDiv);
    const heading= document.createElement("div");
    textDiv.appendChild(heading);
    heading.textContent = "Welcome to this stupid Restaurant"
    const para = document.createElement("p");
    para.textContent = "Having fun? well I am not having fun when I realise I have to somehow learn the syntax to css again and again at times, gosh why don't i have some kind of perfect memory"
    textDiv.appendChild(para)
}