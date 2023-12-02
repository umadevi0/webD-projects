const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

//displaying already stored information in local storage on browser
function showNotes(){
  notesContainer.innerHTML=localStorage.getItem("notes");
}

showNotes();
//storing information in local storage
function updateStorage(){
  localStorage.setItem("notes",notesContainer.innerHTML);
}
//creating input-box
createBtn.addEventListener("click",()=>{
  let inputBox=document.createElement("p");
  let img=document.createElement("img");
  inputBox.className="input-box";
  img.src="images/delete.png";
  inputBox.setAttribute("contenteditable","true");
  notesContainer.appendChild(inputBox).appendChild(img);
})
//enabling delete button and updating information in inputbox to local storage
notesContainer.addEventListener("click",function(e){
  if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }else if(e.target.tagName==="P"){
    notes=document.querySelectorAll(".input-box");
    notes.forEach(nt =>{
      nt.onkeyup=function(){
        updateStorage();
      }
    })
  }
})
//To get a line break after clicking enter
document.addEventListener("keydown",event=>{
  if(event.key==="Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})
