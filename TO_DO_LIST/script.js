const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
let date=new Date();
var months=["january","febrauary","march","April","May","June","July","August","September","October","November","December"]
let r=date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()+"  "+date.getHours()+":"+date.getMinutes();
function addtask(){
  if(inputBox.value===''){
    alert("You must write Something");
  }else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    var p=document.createElement("p");
    p.innerHTML=r;
    li.appendChild(p);
  }
  inputBox.value='';
  saveData();
}
listContainer.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
  listContainer.innerHTML=localStorage.getItem("data");
}
function deleteall(){
  listContainer.innerHTML='';
}
showData();