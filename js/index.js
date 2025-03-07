function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("myDropdown");
  const a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}



function applyFont() {
  const text = document.getElementById('userText').value; // Get the entered text
  const selectedFont = document.getElementById('searchInput').value; // Get the selected font name
  const outputDiv = document.getElementById('output'); // Output div to display the result

  // Check if a font has been selected and apply it; if not, just update the text
  if (selectedFont) {
    // Set the font family for the output div based on the selected font
    outputDiv.style.fontFamily = selectedFont;
  }

  // Display the entered text in the output div
  outputDiv.textContent = text;
}

