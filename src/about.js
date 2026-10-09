import icon from "./resources/do-not-call-icon.png";
export function aboutContent(){
    const content = document.querySelector("#content");
    const aboutUs = document.createElement("div");
    aboutUs.id = "about-us";
    const image = document.createElement("img");
    image.src = icon;
    const heading = document.createElement("h2");
    heading.textContent="DON'T CONTACT US"
    const para = document.createElement("p");
    para.textContent="Visit us, u can find us somewhere in this world even I am not sure."
    aboutUs.appendChild(image);
    aboutUs.appendChild(heading);
    aboutUs.appendChild(para);
    content.appendChild(aboutUs);
}