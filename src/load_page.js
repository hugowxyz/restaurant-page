
const loadHeader = () => {
    const container = document.querySelector("div#main-container");
    console.log("hello");

    const header = document.createElement("header");
    const ul = document.createElement("ul");
    const listItems = ["About", "Menu", "History"];

    for (let item of listItems) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = item;

        li.appendChild(a);

        li.setAttribute("id", item);
        ul.appendChild(li);

    }

    header.appendChild(ul);
    container.appendChild(header);

}

export {
    loadHeader
}