import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Noter from "./Noter";
import CreateArea from "./CreateArea";

export default function App() {
    const [noteArray, setNoteArray] = React.useState([]);

    function newNote(note) {
        setNoteArray((prev) => [...prev, note]);
    }

    function deleteNote(id) {
        setNoteArray((prev) => {
            return prev.filter((note, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={newNote} />
            {noteArray.map((note, index) => (
                <Noter
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    deleteNote={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}
