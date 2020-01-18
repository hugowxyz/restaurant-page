const loadAbout = () => {
    const container = document.querySelector("div#main-container");
    const div = document.createElement("div");
    div.setAttribute("class", "auto-container")

    const h2 = document.createElement("h2");
    h2.textContent = "About";

    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nunc, tincidunt ac semper id, rutrum placerat enim. Vestibulum vel rutrum augue. Donec eget elementum dui. Quisque laoreet mauris vel dui scelerisque, at maximus quam bibendum. Cras vel lectus cursus, porttitor eros sed, varius dolor. Pellentesque non porttitor eros, id suscipit neque. Aliquam elementum ac lorem eu convallis. Aenean enim dui, cursus eu dignissim non, consectetur at leo. Nam quis diam volutpat sem maximus interdum. Fusce luctus sapien pretium purus fermentum, et tincidunt massa porttitor. Vestibulum vitae risus metus. In lacinia velit at erat consectetur, eget congue nisl sodales. Suspendisse vel semper turpis. Quisque eget viverra justo, non feugiat leo.
    `;

    div.appendChild(p);
    container.appendChild(div);

    const btn = document.querySelector("#About");
    btn.classList.add("active");

    console.log("bruh");
}

export {
    loadAbout
}