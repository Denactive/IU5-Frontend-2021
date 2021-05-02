import React, {useState} from 'react'
import { connect } from "react-redux";
import { UserData_t } from '../store/UserData/types';
import { ApplicationState } from "../store/";

function UserSearch({MakeRequest}: any) {
    const [text, SetText] = useState('');
    function Submit(event: any) {
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

const mapStateToProps = ({ user }: ApplicationState) => ({
    : user.data
});
  
const mapDispatchProps = () => {};
  
export default connect(mapStateToProps, mapDispatchProps)(UserSearch);
  