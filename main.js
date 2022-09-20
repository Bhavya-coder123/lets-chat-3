function takeinput() {
    Input1 = document.getElementById("Input1").value;

    localStorage.setItem("Input1", Input1);
    window.location = "kwitter.js";
}
