let listContainer=document.getElementById("list-container");
const addBtn=document.querySelector(".btn");
const inputData=document.getElementById("input-search");

addBtn.addEventListener("click",function(){
    if(inputData.value===""){
        alert("Write any task in the box");
    }
    else{
        let list=document.createElement("li");
        list.innerHTML=inputData.value;
        listContainer.appendChild(list);
        let spanItem=document.createElement("span");
        spanItem.innerHTML="\u00d7";
        list.appendChild(spanItem);
    }
    inputData.value="";
    updateStorage();
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
         e.target.parentElement.remove();
         updateStorage();
    }
    else if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        updateStorage();
    }
});

function updateStorage(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function getStorage(){
   listContainer.innerHTML=localStorage.getItem("data");
}
getStorage();