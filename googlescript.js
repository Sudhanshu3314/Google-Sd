var input = document.getElementById("input");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("SearchBtn").click();
    }
});
