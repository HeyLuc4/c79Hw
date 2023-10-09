menuListArray = ["Pizza Vegetariana", "Pizza de frango" , "Pizza Portuguesa", "Pizza de atum", "Pizza de Calabresa",
"Pizza Portuguesa"];

function getMenu(){
var htmldata = "";
menuListArray.sort()
for (var i=0;i<menuListArray.lenght; i++){
    htmldata=htmldata+menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML= htmldata;}

function addItem(){
var htmldata;
var imgtags = '<img id="im1" src="pizzaImg">'
var item=document.getElementById("addItem").value;
htmldata = "";
menuListArray.sort()
for (var i=0;i<menuListArray.lenght; i++){
    htmldata=htmldata+menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML= htmldata;}

function addTop(){
var item = document.getElementById("addItem").value;
menuListArray.push(item);
addItem()
}