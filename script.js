const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () =>{
    addNewNote();
});

function addNewNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash"></i></button>
            </div>
            <div class="main hidden"></div>
                <textarea></textarea>
        </div>
    `;

    const editBtn = document.querySelector(".edit");
    const deleteBtn = document.querySelector(".delete");
    const main = document.querySelector(".main");
    const textArea = document.querySelector("textarea");

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", () => {
        note.remove();
    });

    textArea.addEventListener("input", (e) => {
        const value = e.target;

        main.innerHTML = marked(value);
    });

    document.body.appendChild(note);

}






