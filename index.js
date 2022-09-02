



// let btn = document.getElementById("btn")
// btn.addEventListener("click",   function(e){
//     let addtext = document.getElementById("input")
//     let notes = localStorage.getItem("notes")
//     if(notes == null){
//         notesObj = []
//     }else{
//         notesObj = JSON.parse(notes)
//     }
//     notesObj.push(addtext.value)
//     localStorage.setItem("notes", JSON.stringify(notesObj))
//     addtext.value = ""
//     console.log(notesObj)


// })



let btn = document.getElementById("Btn")
btn.addEventListener("click", addTxt)


let parentbox = document.getElementById("parentul")


function addTxt(e){
    // if(parentbox.children[0].classList == "emptymsg"){
    //     parentbox.children[0].remove()
    // }

    let curBtn = e.currentTarget;
    let curInput = curBtn.previousElementSibling;
    let curList = curInput.value;


    let newnote  = document.createElement("li")
    newnote.classList.add("list-item")
    newnote.innerHTML = `
                
     ${curList}
    <button id="removebtn" onclick="removelist(this)">Remove</button>
    `

    parentbox.appendChild(newnote)
    curList = "";
}


function removelist(curEle){
    curEle.parentElement.remove()
}
