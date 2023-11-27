function addUser(){
    p1Name = document.getElementById("p1NameInput").value;
    p2Name = document.getElementById("p2NameInput").value;
    localStorage.setItem("p1NameInput",p1Name);
    localStorage.setItem("p2NameInput",p2Name);
    window.location = "gamePage.html";
}