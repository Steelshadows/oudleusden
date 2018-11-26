function burgermenu() {
    var x = document.getElementById("foldmenu");
    if (x.className === "fold") {
        x.className += " respon";
    } else {
        x.className = "fold";
    }
}
