import React, { useState, useEffect, useRef } from 'react';

export const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [isExpanded, setIsExpanded] = useState(false);

    const formRef = useRef(null);

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    }

    function submitNote(event) {
        // Prevent submission if either title or content is empty
        if (note.title.trim() === "" && note.content.trim() === "") {
            alert("Note is empty");
            return;
        }
        
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        setIsExpanded(false); // Collapse the form after adding the note
        event.preventDefault();
    }

    function expandForm() {
        setIsExpanded(true);
    }

    // Collapse form when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        }
        
        if (isExpanded) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isExpanded]);

    return (
        <form 
            ref={formRef} 
            className={`create-note-form ${isExpanded ? 'expanded' : 'collapsed'}`} 
            onClick={expandForm}
        >
            {isExpanded && (
                <input 
                    type="text" 
                    onChange={handleChange} 
                    name="title" 
                    value={note.title} 
                    placeholder="Title"
                />
            )}
            <textarea 
                name="content" 
                onChange={handleChange} 
                value={note.content} 
                placeholder="Take a note..." 
                rows={isExpanded ? 3 : 1}
            />
            {isExpanded && (
                <button onClick={submitNote}>Add</button>
            )}
        </form>
    );
};
