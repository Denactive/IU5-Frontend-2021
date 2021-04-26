import React from 'react'

export default function UserCard({name, userName, repos, avatar}) {
    return (
        <div className="card">
            <a href={"https://www.github.com/" + userName} target="_blank">
                <img className="card-avatar" src={avatar}
                    alt={userName}
                />
            </a>
            <div className="card-sign">
                <div className="card-sign-line header">
                    {name}
                </div>
                <div className="card-sign-line nickname">
                    {userName}
                </div>
                <div className="card-sign-line">
                    {repos != '0' ? <span>Repositories: {repos}</span> : <span>No projects</span>}
                </div>
            </div>
        </div>
    );
}
