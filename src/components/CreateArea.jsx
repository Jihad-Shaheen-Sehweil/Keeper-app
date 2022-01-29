import React from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function CreateArea(props) {
    const [note, setNote] = React.useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        // name means either when inputed - title or content
        // value  means either the values of title or content when inputed
        setNote((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function saveNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    }

    const [show, setShow] = React.useState(false);

    function expand() {
        setShow(true);
    }

    return (
        <div>
            <form className="create-note" onSubmit={saveNote}>
                {show && (
                    <input
                        name="title"
                        value={note.title}
                        onChange={handleChange}
                        placeholder="Title"
                    />
                )}
                <textarea
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows={show ? "3" : "1"}
                    onClick={expand}
                />
                <Zoom in={show}>
                    <Fab type="submit">
                        {/* Fab is a styled button */}
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}
