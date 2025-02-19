function generateArt() {
    let text = document.getElementById("textInput").value;
    
    // Check if there's any text input
    if (text.trim() === "") {
        document.getElementById("asciiOutput").innerText = "Please enter some text!";
        return;
    }

    // Generate ASCII codes of the input text
    let asciiArt = text.split("").map(char => char.charCodeAt(0)).join(" ");
    
    document.getElementById("asciiOutput").innerText = asciiArt;
}

function clearArt() {
    document.getElementById("asciiOutput").innerText = "";
    document.getElementById("textInput").value = "";
}
