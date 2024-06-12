export const renderNotes = (notes) => {
    let newNote = notes.map(({id, note, title, isPinned, isArchived})=>{
        return(
            `<div class="single-noten shadow">
                <div class="d-flex align-center title-container">
                    <span>${title}</span>
                    <button data-type = "del" data-id=${id} class="button del-btn">
                        <span  data-type = "del" data-id=${id} class="material-icons-outlined">
                            remove
                        </span>
                    </button>
                </div>
                <p>${note}</p>
                <div class="d-flex align-center gap-md">
                    <button class="button btn pinned-btn" data-pinned = ${isPinned} data-type = "pinned" data-id=${id}>
                        <span data-type = "pinned" data-id=${id} class="material-icons-outlined" >
                            bookmark
                        </span>
                    </button>
                    <button class="button btn pinned-btn" data-type = "archived" data-archived = ${isArchived} data-id=${id}> 
                        <span data-type = "archived" data-id=${id} class="material-icons-outlined" >
                            archive
                        </span>
                    </button>
                </div>
            </div>`
        )
    });
    newNote = newNote.join("");
    return newNote;
}