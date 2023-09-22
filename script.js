let btn=document.getElementById("b");
let input=document.querySelector(".inputbox");
let box=document.querySelectorAll(".box")
function show(){
    input.innerHTML=localStorage.getItem("data");
}
show();
function store(){
    localStorage.setItem("data",input.innerHTML);
}



btn.addEventListener("click",()=>{
    let notes=document.createElement("p");
    let img=document.createElement("img");
    notes.className="box";
    notes.setAttribute("contenteditable","true");
    img.src="del.png";
    input.appendChild(notes).appendChild(img);
    store();
});
input.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG")
    {
        e.target.parentElement.remove();
        store();
         
    }
    else if(e.target.tagName==="P"){
        box.forEach(nth=>{
            nth.onkyeup=function(){
                 store();
            }
        })
    }
    store();
});
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

