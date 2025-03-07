function filterFunction() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const dropdown = document.getElementById("dropdownList");
    const options = dropdown.getElementsByClassName("dropdown2-option");

    for (let i = 0; i < options.length; i++) {
        const txtValue = options[i].textContent || options[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            options[i].style.display = "";
        } else {
            options[i].style.display = "none";
        }
    }
}

function toggleDropdown() {
    const dropdown = document.getElementById("dropdownList");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectFont(element) {
    const input = document.getElementById("searchInput");
    input.value = element.textContent;
    document.getElementById("dropdownList").style.display = "none";
}

function applyFont() {
    const text = document.getElementById("userText").value;
    const font = document.getElementById("searchInput").value;
    const output = document.getElementById("output");

    output.style.fontFamily = font;
    output.textContent = text;
}