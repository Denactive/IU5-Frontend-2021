import React, {useState} from 'react'

export default function UserSearch({MakeRequest}) {
    const [text, SetText] = useState('');
    function Submit(event) {
        event.preventDefault();
            if (text.trim())
            //AddTask(text);
            MakeRequest(text);
            SetText('');
    }
    return (
        <div className="user-search">
            <form onSubmit={(event) => Submit(event)}>
                <span className="">
                    <input type="text" placeholder="enter a nichname on GitHub" className="search-field"/>
                    <button type="submit" className="search-btn">Find!</button>
                </span>
            </form>
        </div>
    );
}