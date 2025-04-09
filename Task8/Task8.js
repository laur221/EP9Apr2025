function startButton() {
    let width = 0;
    const progressBar = document.getElementById("progressBar");
    const statusText = document.getElementById("statusText");

    setInterval(() => {
        if (width < 100) {
            width++;
            progressBar.style.width = width + "%";
            statusText.textContent = "Progress: " + width + "%";
        }
    }, 50);
}