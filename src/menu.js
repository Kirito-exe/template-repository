import burger from "./resources/burger.jpg";
import chickenBiryani from "./resources/chickenbiryani.jpg"
import dosa from "./resources/dosa.jpg"
import pizza from "./resources/pizza.jpg"
import samosa from "./resources/samosa.jpg"
import shawarma from "./resources/shawarma.jpg"
export function menuContent(){
    const content = document.querySelector("#content")
    const menu = document.createElement("div");
    menu.setAttribute("id","menu")
    for(let i=0;i<6;i++){
        const card = document.createElement("div");
        const info = document.createElement("div");
        card.appendChild(info);
        let heading = document.createElement("h2");
        let desc = document.createElement("p");
        let price = document.createElement("h3");
        card.setAttribute("class","card");
        info.setAttribute("class","info");
        switch (i){
            case 0:
                card.style.backgroundImage = `url(${chickenBiryani})`;
                heading.textContent = "Chicken Biryani";
                desc.textContent = "This thing is delicious";
                price.textContent = "$2";
                info.appendChild(heading);
                info.appendChild(desc);
                info.appendChild(price);
                card.appendChild(info);
                menu.appendChild(card);
                break;
            case 1:
                card.style.backgroundImage = `url(${burger})`;
                heading.textContent = "Burger";
                desc.textContent = "This thing is crunchy, god i am so hungry";
                price.textContent = "$1";
                info.appendChild(heading);
                info.appendChild(desc);
                info.appendChild(price);
                card.appendChild(info);
                menu.appendChild(card);
                break;
            case 2:
                card.style.backgroundImage = `url(${dosa})`;
                heading.textContent = "Dosa";
                desc.textContent = "This thing is spicy, god i am so hungry";
                price.textContent = "$1.5";
                info.appendChild(heading);
                info.appendChild(desc);
                info.appendChild(price);
                card.appendChild(info);
                menu.appendChild(card);
                break;
            case 3:
                card.style.backgroundImage = `url(${pizza})`;
                heading.textContent = "Pizza";
                desc.textContent = "This thing is cheesy, god i am so hungry";
                price.textContent = "$3";
                info.appendChild(heading);
                info.appendChild(desc);
                info.appendChild(price);
                card.appendChild(info);
                menu.appendChild(card);
                break;
            case 4:
                card.style.backgroundImage = `url(${samosa})`;
                heading.textContent = "Samosa";
                desc.textContent = "This thing is crunchy, god i am so hungry";
                price.textContent = "$0.2/piece";
                info.appendChild(heading);
                info.appendChild(desc);
                info.appendChild(price);
                card.appendChild(info);
                menu.appendChild(card);
                break;
            case 5:
                card.style.backgroundImage = `url(${shawarma})`;
                heading.textContent = "Shawarma";
                desc.textContent = "This thing is soft, god i am so hungry";
                price.textContent = "$2";
                info.appendChild(heading);
                info.appendChild(desc);
                info.appendChild(price);
                card.appendChild(info);
                menu.appendChild(card);
                break;
        }
        
    }
    content.appendChild(menu);
}