import React from 'react';
import PropTypes from 'prop-types';

export const Note = (props) => {

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
            <div className='box p-2'>
                <h1 className='title'>{props.title}</h1>
                <p className='para'>{props.content}</p>
                <button className = "Delete" type="button" onClick={handleClick}>Delete</button>
            </div>
    );
};

Note.propTypes = {
    id: PropTypes.number.isRequired, // Or PropTypes.string, depending on your id type
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};
