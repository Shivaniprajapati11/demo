async function loadNotes() {
    const res = await fetch("/notes");
    const data = await res.json();

    const list = document.getElementById("notesList");
    list.innerHTML = "";

    data.forEach(note => {
        const li = document.createElement("li");
        li.textContent = note;
        list.appendChild(li);
    });
}

async function addNote() {
    const input = document.getElementById("noteInput");
    
    await fetch("/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ note: input.value })
    });

    input.value = "";
    loadNotes();
}

loadNotes();