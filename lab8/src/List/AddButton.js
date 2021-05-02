    import React, { useDebugValue, useState } from 'react'

export default function AddBut({AddTask}) {
    const [value, SetValue] = useState('');
    return (
        <form className='enter-item' onSubmit={(event) => {
            event.preventDefault();
            if (value.trim())
            AddTask(value);
            SetValue('');
        }}>
            <input type="text" placeholder="new task" value={value} onChange={event => 
            SetValue(event.target.value)} />
            <button type="submit">
                Add Task
            </button>
        </form>
    );
}