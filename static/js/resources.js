document.addEventListener("DOMContentLoaded", () => {
    const toolList = document.getElementById("tool-list");

    fetch("data/tools.json")
        .then((response) => response.json())
        .then((tools) => {
            tools.forEach((tool) => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${tool.link}" target="_blank">${tool.name}</a> - ${tool.description}`;
                toolList.appendChild(li);
            });
        })
        .catch((error) => console.error("Error loading tools:", error));
});

