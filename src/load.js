import logo_src from "./images/logo.png";

export default function load() {
    const content = document.querySelector("#content");
    const sidebar = document.createElement("div");
    const logo = document.createElement("img");
    const title = document.createElement("h1");
    const description = document.createElement("div");
    const para_1 = document.createElement("p");
    const para_2 = document.createElement("p");
    
    content.innerHTML = "";

    sidebar.classList.add("sidebar");
    logo.src = logo_src;
    logo.classList.add("logo");
    title.textContent = "The Restaurant";
    description.classList.add("description");
    para_1.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    para_2.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    sidebar.appendChild(logo);
    sidebar.appendChild(title);
    content.appendChild(sidebar);
    
    description.appendChild(para_1);
    description.appendChild(para_2);
    content.appendChild(description);

}