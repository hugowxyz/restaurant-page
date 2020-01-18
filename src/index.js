import { loadHeader } from "./load_page.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const clearPage = () => {
    const container = document.querySelector(".auto-container");
    try { container.remove();} catch {}

    document.querySelector("#About").classList.remove("active");
    document.querySelector("#Menu").classList.remove("active");
    document.querySelector("#History").classList.remove("active");

}


loadHeader();
loadAbout();

const menuBtn = document.querySelector("#Menu");
menuBtn.addEventListener(
    "click", (e) => {
        clearPage();
        loadMenu();
    }
);

const aboutBtn = document.querySelector("#About");
aboutBtn.addEventListener(
    "click", (e) => {
        clearPage();
        loadAbout();
    }
);
