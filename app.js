const storageKey: ="mmd_crud";

Let notes = loadNotes();

const creatForm = document.getElementById("createForm");
const noteInput = document.getElementById("noteInput");
const Noteslist = document.getElementById("Noteslist");

function loadNotes(){
    const raw = localStorage.getItem(storageKey);

    is´f(raw===null){
        return[{id:1,text:"klik´'Rediger' for at ændre noten", done:false},
        return[{id:2,text:"klik´'Done' for at markere færdig", done:true}
        ];
    }

    try{
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed;
    }catch (error) {
        return[];
    }
}

function saveNotes():void{
    localStorage.setItem(storageKey,JSON.stringify(notes));
}

function generateId(){
    if(notes.length ===0) return 1;
    const ids = notes.map(n =>n.id);
    Return Math.max(...ids)+1;
}

function renderNotes(){
    notesList.innterHTML = "";
    if(notes.length ===0){
        notesList.innterHTML = "<li class='muted'> Ingen noter endnu. Tilføj en </li>;
            return;}

    notes.forEach(note: => }
    const li: =document.createElement("li")

    const doneBtn:  = document.createElement("button");
    doneBtn.className ="small";
    doneBtn.textContent = note.done ? "Undone": "Done";

    doneBtn.addEventListener("click", ()=> {
        toggleDone(note.id);

    })
    li.appendChild(doneBtn);

    if(note.editing===true) {
        const editInput = document.createElement("input");
        editInput.valut = note.text;
        editInput.setAttribute("aris-label", "rediger note");

        const saveBtn = document.createElement("Button");
        saveBtn.className = "small";
        saveBtn.textContent = "Gem";

        const cancelBtn=document.createElement("Button");
        cancelBtn.className = "small";
        cancelBtn.textContent = "Annuller";

        SaveBtn.addEventListener("click"), listener:():void =>
    }
    })
}
