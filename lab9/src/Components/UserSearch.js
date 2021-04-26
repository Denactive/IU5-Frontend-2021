import React, {useState} from 'react'

export default function UserSearch({MakeRequest}) {
    const [text, SetText] = useState('');
    function Submit(event) {
        event.preventDefault();
        if (text.trim())
            MakeRequest(text);
        SetText('');
        }

    return (
        <div className="w-20">
            <form onSubmit={(event) => {Submit(event)}}>
                <span className="user-search">
                    <input type="text" placeholder="enter a nichname on GitHub" value={text} className="search-field" onChange={
                        e => SetText(e.target.value)
                    }/>
                    <button type="submit" className="search-btn">Find!</button>
                </span>
            </form>
        </div>
    );
}