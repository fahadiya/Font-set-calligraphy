document.addEventListener("DOMContentLoaded", function () {
    fetch("fonts.json") // Load fonts from external file
        .then(response => response.json())
        .then(fonts => {
            const dropdownList = document.getElementById("dropdownList");
            dropdownList.innerHTML = ""; // Clear existing content

            fonts.forEach(font => {
                let div = document.createElement("div");
                div.className = "dropdown2-option";
                div.textContent = font.name;
                div.style.fontFamily = font.css;
                div.dataset.font = font.css;
                div.onclick = function () { selectFont(this); };
                dropdownList.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading fonts:", error));
});

function selectFont(element) {
    const selectedFont = element.dataset.font;
    document.getElementById("userText").style.fontFamily = selectedFont;
    document.getElementById("searchInput").value = element.textContent; // Show selected font in input
}

