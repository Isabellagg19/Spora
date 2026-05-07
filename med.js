function toggleContainer() {
    const container = document.getElementById("hospital-container");
    
    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}