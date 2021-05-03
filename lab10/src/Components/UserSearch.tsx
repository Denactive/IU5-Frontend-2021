import React, { FormEventHandler, useEffect } from 'react'
import { UserCard } from './Card'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { update, clear } from "../store/userSearch"
import { fetchUserDataActionCreator } from '../store/userData';



//
//  HELP
//



export const UserSearch: React.FC = () => {
    console.log("userSearch rendering");
    let text: string | undefined = useTypedSelector(state => state.search.searchText);
    let button_clk: number = 0;
    const dispatch = useDispatch();

    function Submit(event: React.FormEvent) {
        event.preventDefault();
        console.log("btn click | trying to save " + text);
        // dispatch(clear);
        // dispatch(update(text));
        // dispatch(fetchUserDataActionCreator(text));
        button_clk++;
        text = '';
    }
    
    useEffect(() => {
        dispatch(update(text));
        dispatch(fetchUserDataActionCreator(text));
    //}, [])
    }, [button_clk])

    return (
        <div className="w-20">
            <form onSubmit={(event) => Submit(event)}>
                <span className="user-search">
                    <input type="text" placeholder="enter a nickname on GitHub"  className="search-field" 
                    onChange={
                        e => text = e.target.value
                    }
                    />
                    <button type="submit" className="search-btn">Find!</button>
                </span>
            </form>
            <UserCard />
        </div>
    );
}