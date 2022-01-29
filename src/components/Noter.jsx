import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Noter(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button
                onClick={() => {
                    props.deleteNote(props.id);
                }}
            >
                <DeleteForeverIcon />
            </button>
        </div>
    );
}
