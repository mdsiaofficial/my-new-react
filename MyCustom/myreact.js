function customRender(reactEl, container) {
    // const domEl = document.createElement(reactEl.type);
    // domEl.innerHTML = reactEl.children;
    // domEl.setAttribute("href", reactEl.props.href);
    // domEl.setAttribute("target", reactEl.props.target);
    // container.appendChild(domEl);

    const domEL = document.createElement(reactEl.type);
    domEL.innerHTML = reactEl.children;
    for (const prop in reactEl.props) {
        if (prop === "children") continue;
        domEL.setAttribute(prop, reactEl.props[prop]);
        container.appendChild(domEL);
    }

}
const mainContainer = document.getElementById("root");
const reactEl = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "click me to visit google",
};

customRender(reactEl, mainContainer);
