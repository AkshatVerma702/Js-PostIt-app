document.addEventListener('DOMContentLoaded', function() {
    const notesContainer = document.querySelector('.notes-container');
     
    const notes_html = 
    `  <div class="note-header">
        <button class="delete-note-btn">X</button>
        </div>
        <div class="note-content" contenteditable="true">
            Your note content here...
        </div>`;

    const generateColor = () =>{
        const red = Math.floor(Math.random() * 128) + 128;
        const green = Math.floor(Math.random() * 128) + 128;
        const blue = Math.floor(Math.random() * 128) + 128;

        const color = `rgb(${red}, ${green}, ${blue})`;

        return color;
    }

    const addNote = (e) =>{
        e.preventDefault();
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerHTML = notes_html;
        note.style.backgroundColor = generateColor();
        notesContainer.appendChild(note);
        
        const delBtn = note.querySelector('.delete-note-btn');
        delBtn.addEventListener('click', () =>{
            notesContainer.removeChild(note);
        })
    }

    document.querySelector('.add-btn').addEventListener('click', addNote);
})