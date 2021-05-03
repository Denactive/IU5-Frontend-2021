import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchUserDataActionCreator } from "../store/userData"

export const UserCard: React.FC = () => {
    console.log("userCard rendering");
    const {data, loading, error} = useTypedSelector(state => state.user);
    const text: string = useTypedSelector(state => state.search.searchText);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserDataActionCreator(text))
    }, [text])

    if (loading)
        return (<h6>Загрузка...</h6>)

    if (error)
        return (<h6>{error}</h6>)

    return (
        (!data.userName || !data.name || !data.avatar) ? <div></div> :
        <div className="card">
            <a href={"https://www.github.com/" + data.userName} target="_blank">
                <img className="card-avatar" src={data.avatar}
                    alt={data.userName}
                />
            </a>
            <div className="card-sign">
                <div className="card-sign-line header">
                    {data.name}
                </div>
                <div className="card-sign-line nickname">
                    {data.userName}
                </div>
                <div className="card-sign-line">
                    {data.repos !== 0 ? <span>Repositories: {data.repos}</span> : <span>No projects</span>}
                </div>
            </div>
        </div>
        //TODO: back btn
    );
}
