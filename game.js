
p1 = localStorage.getItem("p1Name");
p2 = localStorage.getItem("p2Name");
p1Score = 0;
p2Score = 0;

document.getElementById("p1Name").innerHTML = p1 + " : ";
document.getElementById("p2Name").innerHTML = p2 + " : ";

document.getElementById("p1Score").innerHTML = p1Score;
document.getElementById("p2Score").innerHTML = p2Score;

document.getElementById("plrQuestion").innerHTML = "Turno da pergunta: " + p1;
document.getElementById("plrAnwser").innerHTML = "Turno da resposta: " + p2;

function send(){
    getNum = document.getElementById("wordInput").value; 
    question = "<h4 id='wordDisplay'> P. "+getNum+" </h4>";
    inputIn = "<br> Resposta: <input type='text' id='=inputInBox'> ";
    check = "<br> <br><button class='btn btn-success'> Checar </button>";
    row = question + inputIn + check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}