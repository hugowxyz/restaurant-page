const loadMenu = () => {
    const container = document.querySelector("div#main-container");
    const div = document.createElement("div");
    div.setAttribute("class", "auto-container")
    const ul = document.createElement("ul");
    const items = ["Meat", "Vegetables", "Chicken"];

    const h2 = document.createElement("h2");

    h2.textContent = "Menu";

    div.appendChild(h2);

    for (let item of items) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    } 

    div.appendChild(ul);
    container.appendChild(div);

    const btn = document.querySelector("#Menu");
    btn.classList.add("active");

}

export {
    loadMenu
}